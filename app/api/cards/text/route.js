import { NextResponse } from "next/server";

export async function POST(request){

    const wordData = await request.json();
    
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ wordData })
    }

    const cardText = await fetch(`${process.env.AI_API}/get-text-card`, postData);

    return NextResponse.json(cardText);
}

