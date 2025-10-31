import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import { apiQueryDatabase } from "@/lib/api/api-query-database";
import { DB_CONNECTION_PARAMS } from "@/lib/constants";

export async function GET(req: NextRequest) {
    const query: string[] = []
    let values: string[] = []

    const slug = req.nextUrl.searchParams.get('slug')
    const sortOrder = req.nextUrl.searchParams.get('sortOrder')
    const showHidden = req.nextUrl.searchParams.get('showHidden')?.toLowerCase()
    if (slug) {
        console.log('slug is present.', slug)
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

    const queryResponse = await apiQueryDatabase(query.join(' '), values)

    return NextResponse.json(queryResponse)
}

export async function POST(req: NextRequest) {
    const data = await req.json()

    const connection = await mysql.createConnection(DB_CONNECTION_PARAMS)
    const query = `insert into articles (title, slug, excerpt, author, datePublished, body) values (?, ?, ?, ?, ?, ?)`
    const values = [data.title, data.slug, data.excerpt, 1, data.datePublished, data.body]

    console.log('API POST: adding article with data ===', data)
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
        console.log('API POST: closing database connection. response data ===', responseData)
        return NextResponse.json(responseData)
    }


}