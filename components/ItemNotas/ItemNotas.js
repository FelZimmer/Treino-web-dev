import { useRouter } from "next/navigation"

export default function ItemNotas({nota, onDeletar}){


    const router = useRouter()

    function Rota(){
        router.push(`/notes/${encodeURIComponent(nota.id)}?title=${encodeURIComponent(nota.title)}&content=${nota.content}`)
    }


return(
    <>
    <li>
        <h3>{nota.title}</h3>
        <p>{nota.content}</p>
        <small>{nota.data}</small>
        <button onClick={Rota}>Detalhes</button>
        <button onClick={()=> onDeletar(nota.id)}>Deletar</button>
    </li>
    </>
)
}