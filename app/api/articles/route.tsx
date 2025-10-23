import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "@/app/lib/functions/constants";

const connectionParams = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
}

export async function GET(req: NextRequest) {
    const query: string[] = []
    let values: string[] = []

    const slug = req.nextUrl.searchParams.get('slug')
    const sortOrder = req.nextUrl.searchParams.get('sortOrder')
    const showHidden = req.nextUrl.searchParams.get('showHidden')?.toLowerCase()
    if (slug) {
        query.push(
            'SELECT articles.slug, articles.title, articles.author as authorId, articles.datePublished, articles.body, articles.excerpt, authors.name as authorName',
            'FROM articles',
            'JOIN authors',
            'ON authors.id = articles.author',
            'WHERE articles.slug=?',
            'LIMIT 1',
        )
        values.push(slug)
    } else {
        // SELECT
        const selectColumns = ['*']
        query.push(`SELECT ${selectColumns.join(', ')}`)

        // FROM
        const fromTables = ['articles']
        query.push(`FROM ${fromTables.join(', ')}`)

        // WHERE
        const whereStatements: string[] = []
        if (!showHidden || (showHidden !== 'true')) {
            whereStatements.push(`visible = true`)
        }
        query.push(`WHERE ${whereStatements.join(' AND ')}`)

        // ORDER BY
        if (sortOrder) {
            const VALID_SORT_ORDERS = {
                newestFirst: 'ORDER BY datePublished DESC',
            }

            if (Object.keys(VALID_SORT_ORDERS).includes(sortOrder)) {
                query.push(VALID_SORT_ORDERS[sortOrder])
            }
        }
    }

    let dbResponse
    let responseData

    const connection = await mysql.createConnection(connectionParams)
    try {
        dbResponse = await connection.execute(query.join(' '), values)
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
        return NextResponse.json(responseData)
    }
}

export async function POST(req: NextRequest) {
    const data = await req.json()

    console.log('API POST: data ===', data)
    const connection = await mysql.createConnection(connectionParams)
    const query = `insert into articles (title, slug, excerpt, author, body) values (?, ?, ?, ?, ?)`
    const values = [data.title, data.slug, data.excerpt, 1, data.body]

    let dbResponse
    let responseData

    try {
        dbResponse = await connection.execute(query, values)
        responseData = {
            ok: true,
            data: dbResponse,
        }
    } catch (err: any) {
        responseData = {
            ok: false,
            message: err.message,
        }
    } finally {
        return NextResponse.json(responseData)
    }


}