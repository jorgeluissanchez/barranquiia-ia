"use client";
import React from 'react';

export default function Page() {
  const wordRef = React.useRef();
  
  async function fetchData(event){
    event.preventDefault();
    
    const word = wordRef.current.value;
    
    const cardText = await fetch(`/api/cards/text`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify({word})
    })

    console.log(cardText);
    
}
  return ( 
    <div>
        Word:
        <input type="text" name="word" id="wordInput" ref={wordRef}/><br />
        <button type="submit" onClick={fetchData}>Submit</button>
    </div>
  )
}
