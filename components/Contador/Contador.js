"use client"

import { useEffect, useState } from "react"

export default function Contador(){
    const [count, setCount] = useState( 0 )

    useEffect(()=> {

        document.title = `Você clicou ${count} vezes`;
    }
    , [count])
    return (
        <>
    <h2>Contador{count}</h2>
            <button onClick={() => setCount(count + 1)}>Cliquei {count}</button>
        </>
)

}