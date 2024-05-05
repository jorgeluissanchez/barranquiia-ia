export async function POST(request) {
    
    const blob = request.body;
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');

    const mdx = await fetch(`${process.env.AI_API}/get-mdx`, {
        method: 'POST',
        body: blob,
        headers
    });

    return Response(mdx, {status: 200, statusText: "OK", headers});

}