import { queryDatabase } from "@/lib/query-database";
import { DbQuery, DbWhereCondition } from "@/lib/types/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const ids = req.nextUrl.searchParams.getAll('ids')

    const query: DbQuery = []

    query.push(
        { keyword: 'SELECT', predicate: 'name' },
        { keyword: 'FROM', predicate: 'tags' },
    )

    const whereConditions: DbWhereCondition[] = []
    whereConditions.push({ key: 'id', value: `IN (${ids.join(',')})` })
    const whereStatement = whereConditions
        .map(condition => `${condition.key} ${condition.value}`)
        .join(' AND ')
    query.push({ keyword: 'WHERE', predicate: whereStatement })

    const response = await queryDatabase({ query })

    const result = response[0]
    return NextResponse.json(result)
}