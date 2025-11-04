import mysql from 'mysql2/promise';
import { DB_CONNECTION_PARAMS } from '@/constants';

export const apiQueryDatabase = async (queryStatement: string, queryValues: any[] = []) => {
    if (queryStatement.length === 0) {
        throw new Error('apiQueryDatabase(): Query statement is empty.')
    }

    const connection = await mysql.createConnection(DB_CONNECTION_PARAMS)

    let dbResponse
    let responseData

    try {
        dbResponse = await connection.execute(queryStatement, queryValues)
        console.log('apiQueryDatabase(): Query:', queryStatement, '|-| Database Query Response:', dbResponse)
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
        return responseData
    }
}