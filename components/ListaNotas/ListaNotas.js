import ItemNotas from "../ItemNotas/ItemNotas";

export default function ListaNotas({notas, onDeletar}){
return(
    <ul>
       
        {notas.map((nota) => (
            <ItemNotas key = {nota.id} nota = {nota} onDeletar={onDeletar}></ItemNotas>
        ))}
    </ul>
)

}