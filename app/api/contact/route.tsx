import { sendVisitorMessage } from "@/app/lib/aws-ses-mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name: visitorName, email: visitorEmail, message: visitorMessage } = await req.json()
    const adminEmail = "website-mailer@aldengillespy.com";
    const userEmail = "aldengillespy@icloud.com"
    const sendVisitorMessageResponse = await sendVisitorMessage({ adminEmail, userEmail, visitorName, visitorEmail, visitorMessage });
    return NextResponse.json(sendVisitorMessageResponse)
}
