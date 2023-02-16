import "./UserDetail.css";
import { useEffect, useState } from "react";
import UserForm from "../user-form/UserForm";
import postRoutes from "../app/routes/post.routes";
import Post from "../post/Post";
import PostForm from "../post-form/PostForm";

const UserDetail = ({tableRow, active, setActive, sendUpdateStatus}) => {
  const [userDetailFormActive, setUserDetailFormActive]= useState(false);
  const [postFormActive, setPostFormActive]= useState(false);
  const [postModalActive, setPostModalActive]= useState(false);


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyScope, setCompanyScope] = useState("");

  const [postData, setPostData] = useState([]);

  const [ userDetailStatus, setUserDetailStatus] = useState(true);

  const [updatedUser, setUpdatedUser] = useState(null);

  useEffect(() => {
    if(tableRow) {
      setFirstName(tableRow?.firstName);
      setLastName(tableRow?.lastName);
      setUserName(tableRow?.userName);
      setEmail(tableRow?.email);
      setStreet(tableRow?.address?.street);
      setBuilding(tableRow?.address?.building);
      setCity(tableRow?.address?.city);
      setZipcode(tableRow?.address?.zipcode);
      setPhone(tableRow?.phone);
      setWebsite(tableRow?.website);
      setCompanyName(tableRow?.company?.name);
      setCompanyScope(tableRow?.company?.scope);
    }

    if(updatedUser){
    setFirstName(updatedUser?.firstName);
    setLastName(updatedUser?.lastName);
    setUserName(updatedUser?.userName);
    setEmail(updatedUser?.email);
    setStreet(updatedUser?.address?.street);
    setBuilding(updatedUser?.address?.building);
    setCity(updatedUser?.address?.city);
    setZipcode(updatedUser?.address?.zipcode);
    setPhone(updatedUser?.phone);
    setWebsite(updatedUser?.website);
    setCompanyName(updatedUser?.company?.name);
    setCompanyScope(updatedUser?.company?.scope);
    }

  }, [tableRow,sendUpdateStatus,updatedUser]);

   useEffect(() => {
    if(tableRow){
    fetch(
      postRoutes.getAll,
    )
    .then((response) => response.json())
    .then((data) => {
      const modifyData = data.filter(item => item.userId === tableRow.id);
      if(modifyData.length) {
        setPostData(modifyData);
        setPostFormActive(true);
        //console.log(tableRow)
      }
    });
  }
    
   },[tableRow])



   const goBack =() => {
     setActive(false);
     sendUpdateStatus(false);
   }

   const openUserModal = () => {
      setUserDetailFormActive(true);
      setUserDetailStatus(false);
   }

   const getUserDetail = (user) => {
    setUserDetailStatus(true);
    setUpdatedUser(user);
   }

   const addPost = () => {
    console.log('будем добавлять пост');
    setPostModalActive(true);
    setPostFormActive(false);
   }

   const getCreatedPost = (post) => {
      //console.log(post, 'POST CREATED');
      let postArray = [...postData];
      postArray.push(post);
      setPostData(postArray);
      setPostFormActive(true)
   }

   const updateExistingPosts = (newPost) => {
    //console.log(newPost, 'POST FROM USER DETAIL');

    let postArray = [...postData];
    //console.log(postArray)

    if(newPost.isDeleted) {
      //console.log('будем удалять');
      const deletedPost = postArray.find((item) => item.id===newPost.id);
      const index = postArray.indexOf(deletedPost);
      postArray.splice(index,1);
      setPostData(postArray);
    } else {
      //console.log('WILL UPDATE POST IN DETAIL');
      const findedPost = postArray.find((item) => item.id===newPost.id);
      const index = postArray.indexOf(findedPost);
      postArray.splice(index, 1, newPost);
      //console.log(postArray, 'UPDATE POST ARRAY');
      setPostData(postArray);
    }
   }
      return (
      active && (
          <div>
            {userDetailStatus && 
            <div>
            <div className="user-detail-container">
            <div className="user-detail-btn-container">
              <button onClick={goBack}>Go to users</button>
              <button onClick={openUserModal}>Edit User</button>
            </div>
            <div className="user-info_person">
              <h1>User Details</h1>
              <div className="user-info-item">
                <strong>
                  <span>First Name</span>
                </strong>
                <span>{firstName}</span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>Last Name</span>
                </strong>
                <span>{lastName}</span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>User name</span>
                </strong>
                <span>{userName}</span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>Email</span>
                </strong>
                <span>{email}</span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>Address</span>
                </strong>
                <span>
                  {street} {building} {city} {zipcode}{" "}
                </span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>Phone</span>
                </strong>
                <span> {phone} </span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>Website</span>
                </strong>
                <span> {website}</span>
              </div>
              <div className="user-info-item">
                <strong>
                  <span>Company</span>
                </strong>
                <span>
                  {companyName} {companyScope}{" "}
                </span>
              </div>
            </div>
            </div>
            <button className="add-post-btn" onClick={addPost}>Add Post</button>
            {postData.map((post) => {
              console.log(post);
              return (
                 <Post  getUpdatedPost={updateExistingPosts} id={tableRow.id} post={post} active={postFormActive} setActive={setPostFormActive}></Post>
              )  
            })
}
        
            </div>
           }
            <UserForm  sendUpdateDetail={getUserDetail} activeDetail={userDetailFormActive} setActiveDetail={setUserDetailFormActive} row={tableRow}></UserForm>
            <PostForm   getCreated={getCreatedPost} userId = {tableRow.id} active={postModalActive} setActive={setPostModalActive} post={postData}></PostForm>
          </div>
        )
      );
    }


export default UserDetail;