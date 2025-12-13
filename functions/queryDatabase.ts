import mysql, { RowDataPacket } from 'mysql2/promise';
import { DbQuery, DbQueryValue } from "@/types/db"

export const queryDatabase = async <T extends RowDataPacket>({ query, values = [] }: QueryDatabaseProps) => {

	/*
     NOTE: Presume that any use of this function includes pre-sanitization of the query string and values provided.
     TODO: Make this function more robust, i.e. able to handle a variety of potential cases.
    */

	const params = {
		host: process.env.NEXT_PUBLIC_DB_HOST,
		port: (process.env.NEXT_PUBLIC_DB_PORT as unknown) as number,
		user: process.env.NEXT_PUBLIC_DB_USER,
		password: process.env.NEXT_PUBLIC_DB_PASSWORD,
		database: process.env.NEXT_PUBLIC_DB_NAME,
	}

	const connection = await mysql.createConnection(params)

	const [response] = await connection.execute<T[]>(query, values);
	connection.end()

	return response
}

type QueryDatabaseProps = {
    query: DbQuery,
    values?: DbQueryValue[],
}