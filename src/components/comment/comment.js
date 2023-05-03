import "./Comment.css";

const Comment = ({comment}) => {
      return (
        <div className="comment-container">
          <p>Comments</p>
          <h4>{comment.name}</h4>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      )
    }


export default Comment;