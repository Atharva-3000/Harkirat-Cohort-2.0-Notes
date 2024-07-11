import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, { 

    ///authRoutes is the name of parent folder or route in case of next, it will extract all the dynamic routes from the path or you can simply use req.params.authRoutes to get an array of dynamic routes
    
    params: { authRoutes } }: any) {
    console.log(authRoutes);
    return NextResponse.json({
        message: "Hi from Auth."
    })
}

export function POST() {
    return NextResponse.json({
        message: "Hi from Auth."
    })
}