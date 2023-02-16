import { useEffect, useState} from "react";
import "./Comment.css";

const Comment = ({comment}) => {
  const [commentData, setCommentData] = useState([])

  useEffect(() => {
    setCommentData(comment)
  }, [comment])
  
      return (
        <div className="comment-container">
          <p>Comments</p>
          <h4>{commentData.name}</h4>
          <p>{commentData.email}</p>
          <p>{commentData.body}</p>
        </div>
      )
    }


export default Comment;