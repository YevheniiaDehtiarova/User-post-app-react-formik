import "./UserDetail.css";
import { useEffect, useState } from "react";
import UserForm from "../user-form/UserForm";

const UserDetail = ({tableRow, active, setActive}) => {
  console.log(tableRow, 'USER DETAIL');
  const [userFormActive, setUserFormActive]= useState(false);

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

  useEffect(() => {
     console.log('useEffect works in userDetail')
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
 
   }, [tableRow]);

   const goBack =() => {

   }

   const openUserModal = () => {
    console.log('open modal works')
      setUserFormActive(true);
   }



      return (
        active && (
          <div>
            USER DETAIL WORK
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
            <UserForm  active={userFormActive} setActive={setUserFormActive} row={tableRow}></UserForm>
          </div>
        )
      );
    }


export default UserDetail;