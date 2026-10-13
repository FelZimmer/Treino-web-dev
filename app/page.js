"use client"

import { useState } from "react";
import Formulario from "./components/Formulario/Forms";


export default function Home() {
 
        //valor | valor a ser mudado | valor inicial
  const[notas   ,   setNotas] = useState([])

  function addNotas(novaNota) {
    setNotas((prev) => [...prev, notas])
  }
 
  
  return (
    <>
      <Formulario  value = {notas} onAdicionar={addNotas}></Formulario>
      
    </>
  )
}
