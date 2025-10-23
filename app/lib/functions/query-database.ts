import mysql from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./constants"
import { DbQuery } from "../types/db"

const connectionParams = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
}

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
            return `${keyword} ${predicate.map(({ key, value }) => `${key} = ${value}`)}`
        }

    }).join(' ')
    
    console.log('queryDatabase(): Query string ====', queryString)

    const connection = await mysql.createConnection(connectionParams)
    const response = await connection.execute(queryString, values)

    console.log('queryDatabase(): Query response ====', response)

    return response
}

type QueryDatabaseProps = {
    query: DbQuery,
    values?: string[],
}