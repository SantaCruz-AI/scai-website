import { NextRequest, NextResponse } from 'next/server'
import { newsLetterSignUp } from "@/app/firebase";

export async function POST(req: NextRequest) {

    try {
        const {receiver} = await req.json(); 
        
        newsLetterSignUp(receiver);
        return NextResponse.json({message: "Success."}, {status: 200})
        
    } catch(error) {
        return NextResponse.json({message: "Failed."}, {status: 500})
    }
}