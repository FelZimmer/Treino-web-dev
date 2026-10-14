"use client";
import { useState } from "react";


export default function Formulario({ onAdicionar }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAdicionar(title, content);
        setTitle("")
        setContent("")
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                {/* value que vai fazer mostrar o texto | onchange chama a arrow function para aterar o valor do content pelo texto*/}
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <button type="submit">Salvar </button>
            </form>



        </>
    )
} 