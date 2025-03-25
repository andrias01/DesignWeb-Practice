import { Link } from "react-router-dom";
import Menu from "./Menu";
import React from "react";
function PostCard(props) {
  //esto es solo pruba para el memo de renderizado
  console.log("El renderizado de los postsCard");
  const {post} = props;
    return (
    <div id="blog">
      <article>
        <h3>
          <Link to={`/form/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.body}</p>
      </article>
    </div>
  )
}

export default React.memo(PostCard);
