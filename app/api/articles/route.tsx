import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import { apiQueryDatabase } from "@/functions/apiQueryDatabase";
import { calculateReadtime } from "@/functions/calculateReadtime";

export async function GET(req: NextRequest) {
    const query: string[] = []
    const values: string[] = []

    console.log('API /articles GET(): at top of function.')

    const slug = req.nextUrl.searchParams.get('slug')
    const sortOrder = req.nextUrl.searchParams.get('sortOrder')
    const showHidden = req.nextUrl.searchParams.get('showHidden')?.toLowerCase()
    if (slug) {

        console.log('API /articles GET(): we are requesting a single article. slug =', slug)

        query.push(
            'SELECT slug, title, date, body, excerpt',
            'FROM articles',
            'WHERE slug=? AND visible=?',
            'LIMIT 1',
        )
        values.push(
            slug,
            'true',
        )
    } else {

        console.log('API /articles GET(): we are requesting all articles.')

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

    const queryString = query.join(' ')

    console.log('API /articles GET(): queryString ====', queryString)

    const queryResponse = await apiQueryDatabase(queryString, values)

    console.log('API /articles GET(): queryResponse ====', queryResponse)

    return NextResponse.json(queryResponse)
}

export async function POST(req: NextRequest) {
    const data = await req.json()

    const connection = await mysql.createConnection({
        host: process.env.NEXT_PUBLIC_DB_HOST,
        port: (process.env.NEXT_PUBLIC_DB_PORT as unknown) as number,
        user: process.env.NEXT_PUBLIC_DB_USER,
        password: process.env.NEXT_PUBLIC_DB_PASSWORD,
        database: process.env.NEXT_PUBLIC_DB_NAME,
    })
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
            message: err,
        }
    } finally {
        return NextResponse.json(responseData)
    }


}