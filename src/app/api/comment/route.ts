import { NextRequest, NextResponse } from "next/server";

const com=[
    {
        name:""
    },
];

export function GET(){
    return NextResponse.json(com)
}

export async function POST(request:NextRequest){
    const body=await request.json() // in ho rahe hai
    // console.log(body)
    com.push(body)
    return NextResponse.json(body) // out ho raha hai
}