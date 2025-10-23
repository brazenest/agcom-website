import { queryDatabase } from "@/app/lib/query-database";
import { DbQuery, DbWhereCondition } from "@/app/lib/types/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const articleId = req.nextUrl.searchParams.get('articleId')

    const query: DbQuery = []

    query.push(
        { keyword: 'SELECT', predicate: 'tags' },
        { keyword: 'FROM', predicate: 'articles' },
    )

    const whereConditions: DbWhereCondition[] = []
    if (articleId) {
        whereConditions.push({ key: 'id', value: String(articleId) })
        const whereStatement = whereConditions
            .map(({ key, value }) => `${key} = "${value.replace(/"/g, '\"')}"`)
            .join(' AND ')
        query.push(
            { keyword: 'WHERE', predicate: whereStatement },
            { keyword: 'LIMIT', predicate: '1' },
        )
    }

    const response = await queryDatabase({ query })

    const result = response[0]
    return NextResponse.json(result)
}