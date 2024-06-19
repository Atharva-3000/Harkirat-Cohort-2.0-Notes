import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
    // extract body and store in db
    const body = await req.json();
    console.log(body);
    return Response.json({
        message:"User Logged In!"
    })
}