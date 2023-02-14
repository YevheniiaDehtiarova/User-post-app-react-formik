import { useEffect } from "react";
import "./PostForm.css";

const PostForm = ({active,setActive, post}) => {
  console.log(active,post, 'DATA FROM POST FORM');

  useEffect(()=> {
   console.log(post, 'POST FROM  POST FROM USE EFECT')
  }, [post])
  
      return (
        active && (
        <div>
          <p>Add/Edit post</p>
        </div>
        )
      )
    }


export default PostForm;