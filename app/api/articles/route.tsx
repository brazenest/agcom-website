import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';

const connectionParams = {
    host: 'aldengillespy.com',
    port: 3306,
    user: 'github',
    password: '8H&_!@t=Q7<-,OTyjlo#rLii#',
    database: 'agcom'
}

export async function GET(req: NextRequest) {
    const query: string[] = []
    let values = []

    const slug = req.nextUrl.searchParams.get('slug')
    const sortOrder = req.nextUrl.searchParams.get('sortOrder')
    if (slug) {
        query.push(
            'SELECT articles.slug, articles.title, articles.author as authorId, articles.datePublished, articles.body, authors.name as authorName',
            'FROM articles',
            'JOIN authors',
            'ON authors.id = articles.author',
            'WHERE articles.slug=?',
            'LIMIT 1',
        )
        values.push(slug)
    } else {
        query.push(
            'SELECT *',
            'FROM articles',
        )

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
            data: dbResponse,
        }
    } catch (err) {
        responseData = {
            ok: false,
            message: err.message,
        }
    } finally {
        console.log('responseData', responseData)
        return NextResponse.json(responseData)
    }
}

export async function POST(req: NextRequest) {
    const data = await req.json()

    const connection = await mysql.createConnection(connectionParams)
    const query = `insert into articles (title, slug, body) values (?, ?, ?)`
    const values = [data.title, data.slug, data.body]

    let dbResponse
    let responseData

    try {
        dbResponse = await connection.execute(query, values)
        responseData = {
            ok: true,
            data: dbResponse,
        }
    } catch (err) {
        responseData = {
            ok: false,
            message: err.message,
        }
    } finally {
        console.log('responseData', responseData)
        return NextResponse.json(responseData)
    }


}