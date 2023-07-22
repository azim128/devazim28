import { useQuery } from "react-query"
import { getblog } from "../api/Api"



const Test2 = () => {


    const {
        isLoading,
        isError,
        error,
        data: blogs
    } = useQuery('blog', getblog, {
        select: data => data.sort((a, b) => b.id - a.id)
    })
console.log(blogs)
    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = blogs.map((blog) => {
            return (
                <article key={blog.id}>
                    <div className="border my-5">
                        <p>{blog.body}</p>
                        <p>{blog.catagory.name}</p>
                        <img src={`http://127.0.0.1:8000${blog.image}`} className="img-fluid" alt={blog.image}/>
                    </div>
                    
                </article>
            )
        })
    }
  return (
    <div className="container mx-auto">
    {content}
    </div>
  )
}

export default Test2