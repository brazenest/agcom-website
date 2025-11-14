import mysql from 'mysql2/promise';

export const apiQueryDatabase = async (queryStatement: string, queryValues = []) => {
    if (queryStatement.length === 0) {
        throw new Error('apiQueryDatabase(): Query statement is empty.')
    }

    const connection = await mysql.createConnection({
        host: process.env.AG_DB_HOST,
        port: (process.env.AG_DB_PORT as unknown) as number,
        user: process.env.AG_DB_USER,
        password: process.env.AG_DB_PASSWORD,
        database: process.env.AG_DB_NAME,
    })

    let dbResponse
    let responseData

    try {
        dbResponse = await connection.execute(queryStatement, queryValues)
        responseData = {
            ok: true,
            data: dbResponse[0],
        }
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