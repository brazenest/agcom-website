import { NextRequest, NextResponse } from "next/server";
import mysql from  'mysql2/promise';

const connectionParams = {
host: 'localhost',
port: 3306,
user: 'root',
password: 'password',
database: 'agcom'
}

export async function GET(req: NextRequest) {
    const slug = req.nextUrl.searchParams['slug']
    const connection = await mysql.createConnection(connectionParams)
    const query = `select * from posts where slug='?' limit 1`
    const values = [slug]
    const [results, fields] = await connection.execute(query, values)
    return NextResponse.json({ ok: true, results, fields })
}