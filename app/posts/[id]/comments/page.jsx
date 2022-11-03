import Image from "next/image"
import { loadStorage } from "./function/function"

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // console.log(localStorage.getItem('test'));
    // throw new Error("Error al cargar los datos")
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.json())
}

export default async function Comments({ params }) {
    const { id } = params
    const comments = await fetchComments(id)

    return (<div>
        <h1>Comentarios</h1>
        <ul>
            {comments.map((comment) => (
                <li key={comment.id} >  <article>
                    <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                </article>
                </li>
            ))}
        </ul>
    </div>)
} 