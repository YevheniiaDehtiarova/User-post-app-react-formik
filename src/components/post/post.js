import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";
import postRoutes from "../app/routes/post.routes";
import { useHttp } from "../hooks/http.hook";


const Post = ({post, active,id, getUpdatedPost} ) => {

 console.log(post, active, id, 'DATA INPUT IN POSTS')

  const [postFormActive, setPostFormActive] = useState(false);
  const [postActive, setPostActive] = useState(true);

  const [ postData, setPostData]= useState([]);

  const { request } = useHttp();


  useEffect(() => {
    console.log(post, "use effect in post");
  }, [post]);


  const editPost = (post) => {
    //console.log(post, index, 'POST IN EDIT');
    setPostData(post)
    setPostFormActive(true);
    setPostActive(false);
  };

  const deletePost = (post) => {
    console.log(post, 'POST WILL DELETE');
    const apiUrl = postRoutes.delete.replace('${id}', post.id);
    request(apiUrl, "DELETE", JSON.stringify(post))
    .then((res) => res)
    .catch((err) => console.log(err));
    post.isDeleted = true;
    getUpdatedPost(post);
  };

  const updatePost = (inputPost) => {
    console.log(inputPost, 'POST THAT UPDATE OR CREATE');
    getUpdatedPost(inputPost);
    setPostActive(true);
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
