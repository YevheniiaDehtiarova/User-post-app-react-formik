import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";
import postRoutes from "../app/routes/post.routes";
import { useHttp } from "../hooks/http.hook";


const Post = ({post, active,id, getUpdatedPost} ) => {

  const [postFormActive, setPostFormActive] = useState(false);
  const [postActive, setPostActive] = useState(true);
  const [ postData, setPostData]= useState([]);
  const { request } = useHttp();


  useEffect(() => {
  }, [post]);

  const editPost = (post) => {
    setPostData(post)
    setPostFormActive(true);
    setPostActive(false);
  };

  const deletePost = (post) => {
    const apiUrl = postRoutes.delete.replace('${id}', post.id);
    request(apiUrl, "DELETE", JSON.stringify(post))
    .then((res) => res)
    .catch((err) => console.log(err));
    post.isDeleted = true;
    getUpdatedPost(post);
  };

  const updatePost = (inputPost) => {
    getUpdatedPost(inputPost);
    setPostActive(true);
  }

  const setPostsAfterClose = (status) => {
    if(status) {
      setPostActive(true);
    }
   }

  return (
      <div className="post-container">  
      {(active && postActive) && (
      <div>
      <div className="btn-container">
        <button onClick={() => editPost(post)}>Edit Post</button>
        <button onClick={() => deletePost(post)}>Delete Post</button>
      </div>
      <div className="post-body">
        <p className="post-body__title">{post.title}</p>
        <p className="post-body__text">{post.body}</p>
      </div>
      </div> 
      )
  }
      <PostForm
        getClose={setPostsAfterClose}
        getPost={updatePost}
        userId = {id}
        active={postFormActive}
        setActive={setPostFormActive}
        post={postData}
      ></PostForm>
    </div>
  )
}
export default Post;
