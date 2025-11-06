import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import { apiQueryDatabase } from "@/functions/api-query-database";
import { DB_CONNECTION_PARAMS } from "@/constants";
import { calculateReadtime } from "@/functions/calculate-readtime";

export async function GET(req: NextRequest) {
    const query: string[] = []
    const values: string[] = []

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

    const queryResponse = await apiQueryDatabase(query.join(' '), values)

    return NextResponse.json(queryResponse)
}

export async function POST(req: NextRequest) {
    const data = await req.json()

    const connection = await mysql.createConnection(DB_CONNECTION_PARAMS)
    const query = `insert into articles (title, slug, excerpt, author, datePublished, body) values (?, ?, ?, ?, ?, ?)`
    const values = [data.title, data.slug, data.excerpt, 1, data.datePublished, data.body]

    let dbResponse
    let responseData

    try {
        dbResponse = await connection.execute(query, values)
        responseData = {
            ok: true,
            data: dbResponse,
        }
        responseData.data[0]['readtime'] = calculateReadtime(responseData.data[0].body)
    } catch (err) {
        responseData = {
            ok: false,
            message: err.message,
        }
    } finally {
        return NextResponse.json(responseData)
    }


}