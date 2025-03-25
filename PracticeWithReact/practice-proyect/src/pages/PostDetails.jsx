import { useParams } from "react-router-dom"
import HeaderComponent from "./HeaderComponent"
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
const PostDetails = () => {
    const { id } = useParams();
    const [post,setPost] = useState();
    const fetchpost = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
    }
    useEffect(()=>{
        fetchpost(id);
    },[])

  return (
    <>
        <HeaderComponent></HeaderComponent>
        {post && (
            <section id="blog">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </section>
        )}
    </>
  )
}

export default PostDetails
