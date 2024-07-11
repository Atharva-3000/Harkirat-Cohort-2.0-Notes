import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
export function GET(){
    const session = getServerSession(NEXT_AUTH);
    return NextResponse.json({session});
}