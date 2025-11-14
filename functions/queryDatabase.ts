import mysql from 'mysql2/promise';
import { DB_CONNECTION_PARAMS } from "@/constants"
import { DbQuery, DbQueryValue } from "@/types/db"

export const queryDatabase = async ({ query, values = [] }: QueryDatabaseProps) => {

    /*
     NOTE: Presume that any use of this function includes pre-sanitization of the query string and values provided.
     TODO: Make this function more robust, i.e. able to handle a variety of potential cases.
    */

    console.log('queryDatabase(): query ====', query)
    console.log('queryDatabase(): values ====', values)
    const connection = await mysql.createConnection(DB_CONNECTION_PARAMS)
    const response = await connection.execute(query, values)
    connection.end()
    console.log('queryDatabase(): response ====', response)

    return response
}

type QueryDatabaseProps = {
    query: DbQuery,
    values?: DbQueryValue[],
}