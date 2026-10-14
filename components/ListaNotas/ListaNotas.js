import ItemNotas from "../ItemNotas/ItemNotas";

export default function ListaNotas({notas}){
return(
    <ul>
        {notas.map((nota) => (
            <ItemNotas key = {nota.id} nota = {nota} ></ItemNotas>
        ))}

        
    </ul>
)

}