import mysql from 'mysql2/promise';
import { DB_CONNECTION_PARAMS } from "@/constants"
import { DbClausePredicateEquality, DbQuery } from "@/types/db"

export const queryDatabase = async ({ query, values = [] }: QueryDatabaseProps) => {

    if (query.length === 0) {
        throw new Error('queryDatabase(): Query is empty.')
    }

    const queryString = query.map(({ keyword, predicate }) => {
        if (typeof predicate === 'string') { // a single value
            return `${keyword} ${predicate}`
        } else if (Array.isArray(predicate)) { // a set of 1D values
            return `${keyword} ${predicate.join(', ')})}`
        } else { // a set of 2D values
            return `${keyword} ${(predicate as DbClausePredicateEquality[]).map(({ key, value }: { key: string, value: string }) => `${key} = ${value}`)}`
        }

    }).join(' ')
    
    console.log('queryDatabase(): Query string ====', queryString)

    const connection = await mysql.createConnection(DB_CONNECTION_PARAMS)
    const response = await connection.execute(queryString, values)

    console.log('queryDatabase(): Query response ====', response)

    return response
}

type QueryDatabaseProps = {
    query: DbQuery,
    values?: string[],
}