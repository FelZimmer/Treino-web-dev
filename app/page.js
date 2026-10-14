"use client"

import { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import ListaNotas from "@/components/ListaNotas/ListaNotas";
import Titulo from "@/components/Titulo/Titulo";
import Contador from "@/components/Contador/Contador";



export default function Home() {
 
        //valor | valor a ser mudado | valor inicial
  const[notas   ,   setNotas] = useState([])

  function addNotas(title, content) {
    const nova = {
      id: Date.now(),
      title,
      content,
      data: new Date().toLocaleString(),
    };
    setNotas((prev) => [...prev, nova])
  }

  function excluirNota(id){
    setNotas((prev) => prev.filter((nota) => nota.id != id))
  }
 
  
  return (
    <>
    <Titulo> </Titulo>
    <Contador></Contador>

    <h1>Minhas anotacoes</h1>
      <Formulario onAdicionar={addNotas}></Formulario>
    <p>total de notas:{notas.lenght}</p>
    <ListaNotas notas = {notas} onDeletar={excluirNota}></ListaNotas>


      
    </> 
  )
}
