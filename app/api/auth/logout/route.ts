import { NextResponse } from "next/server";

export async function POST(){
    const response = NextResponse.json({message: "Logout successfull!"}, {status: 200});
    response.cookies.delete("access-token");
    return response;
}