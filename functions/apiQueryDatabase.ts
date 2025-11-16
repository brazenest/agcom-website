import mysql from 'mysql2/promise';

export const apiQueryDatabase = async (queryStatement: string, queryValues: string[] = []) => {
    if (queryStatement.length === 0) {
        throw new Error('apiQueryDatabase(): Query statement is empty.')
    }

    const dbConnectionParams = {
        host: process.env.NEXT_PUBLIC_DB_HOST,
        port: (process.env.NEXT_PUBLIC_DB_PORT as unknown) as number,
        user: process.env.NEXT_PUBLIC_DB_USER,
        password: process.env.NEXT_PUBLIC_DB_PASSWORD,
        database: process.env.NEXT_PUBLIC_DB_NAME,
    }
    console.log('apiQueryDatabase(): dbConnectionParams =', dbConnectionParams)
    const connection = await mysql.createConnection(dbConnectionParams)

    let dbResponse
    let responseData

    try {
        dbResponse = await connection.execute(queryStatement, queryValues)
        responseData = {
            ok: true,
            data: dbResponse[0],
        }
        console.log('apiQueryDatabase(): dbResponse ====', dbResponse)
    } catch (err: any) {
        responseData = {
            ok: false,
            message: err.message,
        }
    } finally {
        connection.end()
        return responseData
    }
}