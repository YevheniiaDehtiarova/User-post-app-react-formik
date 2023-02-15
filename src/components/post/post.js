import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";


const Post = ({post, active,id, getUpdatedPost} ) => {

 console.log(post, active, id, 'DATA INPUT IN POSTS')

  const [postFormActive, setPostFormActive] = useState(false);
  const [postActive, setPostActive] = useState(true);

  const [ postData, setPostData]= useState([]);


  useEffect(() => {
    console.log(post, "use effect in post");
  }, [post]);

  /*useEffect(() => {
    console.log(posts, newPosts, "use effect in post");
  },[ posts,newPosts]);*/


  const addPost = () => {
    setPostFormActive(true);
    setPostActive(false);
  };
  
  const editPost = (post, index) => {
    console.log(post, index, 'POST IN EDIT');
    setPostData(post)
    setPostFormActive(true);
    setPostActive(false);
  };

  const deletePost = () => {};

  /*const updatePosts = (newPost) => {
    setPostActive(true)
    let isUpdated = posts.find((item) => item.id===newPost.id);
    if(isUpdated){
      let findedPost = isUpdated;
      let index = posts.indexOf(findedPost);
      posts.splice(index, 1, newPost);
      setNewPosts(posts);
    } else {
      posts.push(newPost);
      setNewPosts(posts)
    }
  }*/

  const updatePost = (inputPost) => {
    console.log(inputPost, 'POST THAT UPDATE OR CREATE');
    getUpdatedPost(inputPost);
  }



  return (
      <div className="post-container">  
      {(active && postActive) && (
      <div>
      <div className="btn-container">
        <button onClick={addPost}>Add Post</button>
        <button onClick={() => editPost(post)}>Edit Post</button>
        <button onClick={deletePost}>Delete Post</button>
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
