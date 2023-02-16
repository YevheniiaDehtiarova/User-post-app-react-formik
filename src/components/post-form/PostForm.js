import { useEffect, useState } from "react";
import "./PostForm.css";
import { Formik , Form, Field} from "formik";
import * as Yup from 'yup';
import postRoutes from "../app/routes/post.routes";
import { useHttp } from "../hooks/http.hook";


const PostForm = ({active,setActive, post, getPost, userId, getCreated}) => {
  console.log(active,post, userId,  '!!!!!!!!!!!!! DATA FROM POST FORM');

  const [postTitle, setPostTitle] = useState(null);
  const [postBody, setPostBody] = useState(null);
 
  const { request } = useHttp();

  useEffect(()=> {
   console.log(post, 'POST FROM  POST FROM USE EFECT');
   setPostTitle(post?.title);
   setPostBody(post?.body);
  }, [post]);

  const validationSchema = Yup.object().shape({
    postTitle: Yup.string()
    .min(4, 'enter the name')
    .max(50, 'the name is too long')
    .required('Required'),
    postBody: Yup.string()
    .min(5, 'enter valid lastname')
    .max(50, 'last name too long')
    .required('Required'),
  })

  const handleClose = () => {

  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: post ? post.id : '',
      title: postTitle,
      body: postBody,
      userId: userId
    }

    console.log(newPost);
    setActive(false);

    if(!newPost.id) {
      console.log('будем создавать пост');
      request(postRoutes.create, "POST", JSON.stringify(newPost))
      .then((res) => {
        console.log(res, 'RES FROM CREATED');
        const createdPost = res;
        console.log(createdPost);
        getCreated(createdPost);
      })
      .catch((err) => console.log(err));
    } else {
      console.log('будем обновлять пост');
      const apiUrl = postRoutes.update.replace('${id}', post.id);
      request(apiUrl, "PUT", JSON.stringify(newPost))
      .then((res) => res)
      .catch((err) => console.log(err));
      getPost(newPost);
    }

    setPostTitle("");
    setPostBody("");
  }

  const handlePostTitleOnChange = (event) => {
    setPostTitle(event.target.value);
  };
  const handlePostBodyOnChange = (event) => {
    setPostBody(event.target.value);
  }
   
  
      return (
        active && (
        <div>
          <p>Add/Edit post</p>
          <Formik enableReinitialize
          initialValues={{
            postTitle: postTitle ?? "",
            postBody: postBody ?? "",
          }}
          validationSchema={validationSchema}
        >
          <Form className="user-form-block">
            <label htmlFor="postTitle">Enter post header</label>
            <Field id="postTitle" name="postTitle" onChange={handlePostTitleOnChange}/>

            <label htmlFor="postBody">Enter post </label>
            <Field id="postBody" name="postBody" onChange={handlePostBodyOnChange}/>
            <div className="post-form-btn-block">
            <button className="post-form-btn" onClick={handleClose}>x</button>

            <button className="post-form-btn" type="submit" onClick={onSubmitHandler}>Submit</button>
            </div>
          </Form>
        </Formik>
        </div>
        )
      )
    }


export default PostForm;