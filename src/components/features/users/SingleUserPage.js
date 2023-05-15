import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


export const SingleUserPage = ({}) => {

  const { userId } = useParams();

  console.log(userId)

  const user = useSelector((state) =>
    state.users.find((user) => user.id == userId)
  )

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    )
  }

  return (
     <div>
           <div>
            <div className="user-detail-container">
              <div className="user-detail-btn-container">
                <Link to={`/editUser/${user.id}`} className="button">
                Edit User
              </Link>
              </div>
              <div className="user-info_person">
                <h1>User Details</h1>
                <div className="user-info-item">
                  <strong>
                    <span>First Name</span>
                  </strong>
                  <span>{user.firstName}</span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>Last Name</span>
                  </strong>
                  <span>{user.lastName}</span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>User name</span>
                  </strong>
                  <span>{user.userName}</span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>Email</span>
                  </strong>
                  <span>{user.email}</span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>Address</span>
                  </strong>
                  <span>
                    {user.address.street} {user.address.building} {user.address.city} {user.address.zipcode}{" "}
                  </span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>Phone</span>
                  </strong>
                  <span> {user.phone} </span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>Website</span>
                  </strong>
                  <span> {user.website}</span>
                </div>
                <div className="user-info-item">
                  <strong>
                    <span>Company</span>
                  </strong>
                  <span>
                    {user.company.companyName} {user.company.companyScope}{" "}
                  </span>
                </div>
              </div>
            </div>    
          </div>
     </div>
  )
}
