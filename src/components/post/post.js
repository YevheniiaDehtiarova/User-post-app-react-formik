import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";
import postRoutes from "../app/routes/post.routes";
import Comment from "../comments/Comments";
import axios from "axios";

const Post = ({ post, formActive, id, getUpdatedPost }) => {
  const [postFormActive, setPostFormActive] = useState(false);
  const [postActive, setPostActive] = useState(true);
  const [commentActive, setCommentActive] = useState(false);
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(postRoutes.getComments);
        const data = await response.json();
        const modifyData = data.filter((comment) => comment.postId === post.id);
        if (modifyData.length) {
          setCommentData(modifyData);
          setCommentActive(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    if (post) {
      fetchComments();
    }
  }, [post]);

  const editPost = (post) => {
    setPostData(post);
    setPostFormActive(true);
    setPostActive(false);
  };

  const deletePost = (post) => {
    const apiUrl = postRoutes.delete.replace("${id}", post.id);
    axios
      .delete(apiUrl, post)
      .then((response) => response)
      .catch((err) => console.log(err));
    post.isDeleted = true;
    getUpdatedPost(post);
  };
 

  const updatePost = (inputPost) => {
    getUpdatedPost(inputPost);
    setPostActive(true);
  };

  const setPostsAfterClose = (status) => {
    if (status) {
      setPostActive(true);
    }
  };

  return (
    <div className="post-container">
      {formActive  && postActive && (
        <div>
          <div className="btn-container">
            <button onClick={() => editPost(post)}>Edit Post</button>
            <button onClick={() => deletePost(post)}>Delete Post</button>
          </div>
          <div className="post-body">
            <p className="post-body__title">{post.title}</p>
            <p className="post-body__text">{post.body}</p>
          </div>
          <div>
            {commentData.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  comment={comment}
                  active={commentActive}
                  setActive={setCommentActive}
                ></Comment>
              );
            })}
          </div>
        </div>
      )}
      <PostForm
        getClose={setPostsAfterClose}
        getPost={updatePost}
        userId={id}
        active={postFormActive}
        setActive={setPostFormActive}
        post={postData}
      ></PostForm>
    </div>
  );
};
export default Post;
