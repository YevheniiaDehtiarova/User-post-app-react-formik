import { useEffect, useState } from "react";
import "./PostForm.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import postRoutes from "../app/routes/post.routes";
import axios from "axios";

const PostForm = ({
  active,
  setActive,
  post,
  getPost,
  userId,
  sendCreatedPost,
  getClose,
}) => {
  const [postTitle, setPostTitle] = useState(null);
  const [postBody, setPostBody] = useState(null);

  useEffect(() => {
    setPostTitle(post?.title);
    setPostBody(post?.body);
  }, [post]);

  const validationSchema = Yup.object().shape({
    postTitle: Yup.string()
      .min(4, "enter the name")
      .max(50, "the name is too long")
      .required("Required"),
    postBody: Yup.string()
      .min(5, "enter valid lastname")
      .max(50, "last name too long")
      .required("Required"),
  });

  const handleClose = (e) => {
    e.preventDefault();
    setActive(false);
    getClose(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: post ? post.id : "",
      title: postTitle,
      body: postBody,
      userId: userId,
    };

    setActive(false);

    if (!newPost.id) {
      axios
        .post(postRoutes.create, newPost)
        .then((response) => {
          const createdPost = response;
          sendCreatedPost(createdPost);
        })
        .catch((err) => console.log(err));
    } else {
      const apiUrl = postRoutes.update.replace("${id}", post.id);
      axios
        .put(apiUrl, newPost)
        .then((response) => response)
        .catch((err) => console.log(err));
      getPost(newPost);
    }

    setPostTitle("");
    setPostBody("");
  };

  const handlePostTitleOnChange = (event) => {
    setPostTitle(event.target.value);
  };
  const handlePostBodyOnChange = (event) => {
    setPostBody(event.target.value);
  };

  return (
    active && (
      <div>
        <p>Add/Edit post</p>
        <Formik
          enableReinitialize
          initialValues={{
            postTitle: postTitle ?? "",
            postBody: postBody ?? "",
          }}
          validationSchema={validationSchema}
        >
          <div className="user-form-block">
            <label htmlFor="postTitle">Enter post header</label>
            <Field
              id="postTitle"
              name="postTitle"
              onChange={handlePostTitleOnChange}
            />

            <label htmlFor="postBody">Enter post </label>
            <Field
              id="postBody"
              name="postBody"
              onChange={handlePostBodyOnChange}
            />

            <div className="post-form-btn-block">
              <button className="post-form-btn" onClick={handleClose}>
                x
              </button>
              <button
                className="post-form-btn"
                type="submit"
                onClick={onSubmitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </Formik>
      </div>
    )
  );
};

export default PostForm;
