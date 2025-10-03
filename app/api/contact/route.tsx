import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    return NextResponse.json({
        status: 'ok',
    } as RouteResponse)
}

type RouteResponse = {
    status: 'ok' | 'error',
    error?: Error,
}