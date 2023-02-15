import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";

const Post = ({posts, active} ) => {
  /*const [postTitle, setPostTitle]= useState('');
 const [postBody, setPostBody] = useState('');*/

 console.log(posts, active, 
  'DATA INPUT IN POSTS')

  const [postFormActive, setPostFormActive] = useState(false);

  const [ postsUser, setPostsUser]= useState([]);

  useEffect(() => {
    console.log(posts, "use effect in post");
    //posts.map(item => console.log(item))
    /*setPostTitle(post.post.title);
    setPostBody(post.post.body);*/
  }, [posts]);

  const addPost = () => {
    setPostFormActive(true);
  };
  const editPost = () => {
    setPostFormActive(true);
  };

  const deletePost = () => {};

  return (
    posts.length && (
      posts.map((post) => {
        console.log(post, 'POST IN RETURN');
      <div>
        <div className="btn-container">
          <button onClick={addPost}>Add Post</button>
          <button onClick={editPost}>Edit Post</button>
          <button onClick={deletePost}>Delete Post</button>
        </div>
        <div className="post-container">
          <p className="post-title">{post.title}</p>
          <p className="post-text">{post.body}</p>
        </div>
        <PostForm
          active={postFormActive}
          setActive={setPostFormActive}
          post={post}
        ></PostForm>
      </div>
      })
    )
    
  );
};

export default Post;
