
export async function POST(request){
    
    const context = await request.json();  

    const audioHeaders = {
        'Content-Type': 'audio/wav'
    }
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {word: context.word}
    }

    const cardAudio = await fetch(`${process.env.AI_API}/get-audio`, postData);

    return Response(cardAudio, {status: 200, statusText: "OK", headers: audioHeaders});
}

