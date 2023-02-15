import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";
import { useCallback } from "react";

const Post = ({posts, active,id} ) => {

 console.log(posts, active, id, 'DATA INPUT IN POSTS')

  const [postFormActive, setPostFormActive] = useState(false);
  const [postActive, setPostActive] = useState(true);

  const [ postData, setPostData]= useState([]);

  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    console.log(posts, "use effect in post");
  }, [posts]);

  useEffect(() => {
    console.log(posts, newPosts, "use effect in post");
  },[ posts,newPosts]);


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

  const updatePosts = (newPost) => {
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
  }



  return posts?.map((post, index) => {
    return (
      <div className="post-container">  
      {(active && postActive) && (
      <div>
      <div className="btn-container">
        <button onClick={addPost}>Add Post</button>
        <button onClick={() => editPost(post, index)}>Edit Post</button>
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
        userId = {id}
        getPost = {updatePosts}
        active={postFormActive}
        setActive={setPostFormActive}
        post={postData}
      ></PostForm>
    </div>
    )
      })
};

export default Post;
