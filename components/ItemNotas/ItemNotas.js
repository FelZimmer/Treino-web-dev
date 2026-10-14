
export default function ItemNotas({nota}){
return(
    <>
    <li>
        <h3>{nota.title}</h3>
        <p>{nota.content}</p>
        <small>{nota.data}</small>
    </li>
    </>
)
}