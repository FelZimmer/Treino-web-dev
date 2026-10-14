"use client"

import { useEffect, useState } from "react"


export default function Titulo(){
    const [texto, setTexto] = useState("")

    useEffect(() => {

    },[texto])

    return (
        <>
            <h1>Olá, {texto ? texto : "Visitante"}</h1>
    <input value={texto} onChange={(e) => setTexto(e.target.value)}></input>
        </>
    )
}