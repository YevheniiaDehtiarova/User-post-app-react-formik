import { useEffect, useState } from "react";
import PostForm from "../post-form/PostForm";
import "./Post.css";
import postRoutes from "../app/routes/post.routes";
import Comment from "../comment/Comment";
import axios from "axios";

const Post = ({ post, active, id, getUpdatedPost }) => {
  console.log(post, "input post");

  const [postFormActive, setPostFormActive] = useState(false);
  const [postActive, setPostActive] = useState(true);
  const [commentActive, setCommentActive] = useState(false);

  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    if (post) {
      fetch(postRoutes.getComments)
        .then((response) => response.json())
        .then((data) => {
          const modifyData = data.filter(
            (comment) => comment.postId === post.id
          );
          if (modifyData.length) {
            setCommentData(modifyData);
            setCommentActive(true);
          }
        });
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
      {active && postActive && (
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
              console.log(comment, "COMMENT FROM POST");
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
