import { NextResponse } from "next/server";

export async function POST(request){

    // The blob file corresponding to the audio recorded by the user
    const blob = request.body;

    const accuracy = await fetch(`${process.env.AI_API}/check-pronunciation`, {
        method: 'POST',
        body: blob,
        headers: {
            'Content-Type': 'audio/mp3'
        }
    });

    return NextResponse.json({ accuracy });
}

