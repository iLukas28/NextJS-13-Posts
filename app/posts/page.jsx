import { Suspense } from "react"
import { ListOfPosts } from "./ListOfPosts"


export default async function PostsPage() {
    return (
        <section>
            <Suspense fallback={<p>Cargando posts...</p>}>
                <h1>Mis posts</h1>
                <ListOfPosts />
            </Suspense>
        </section>)
}