import HeaderComponent from "./HeaderComponent"
import { useContext, useEffect } from "react"
import PostCard from "../components/PostCard";
import Menu from "../components/Menu";
import { BlogContext } from "../contexts/blog.context";
import { UserContext } from "../contexts/user.context";

function Blog() {
  const { posts, error, getPosts } = useContext(BlogContext);
  const { login, logOut } = useContext(UserContext);

  useEffect(() => {
    getPosts();
  }, [])

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    )
  })
  return (
    <div>
      <>
        <HeaderComponent></HeaderComponent>
        <section id="blog">
          <h2>Blog</h2>
          <button onClick={() => login()}>Login</button>
          <button onClick={() => logOut()}>LogOut</button>
          {error ? (
            <h2 id="something-bad">Algo ha SALIDO MAL</h2>
          ) : postCards.length ? (
            <ul>{postCards}</ul>
          ) : (
            <h2>LOADING.....</h2>
          )}
          {/* esta linea es para mostrar algo si se demora en cargar la pagina */}
        </section>
      </>
    </div>
  )
}

export default Blog
