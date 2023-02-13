import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import { useState, useEffect } from "react";
import Users from "../users/Users";
import userRoutes from "../app/routes/user.routes"

const UserTable = () => {

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch(
      userRoutes.getUsers,
    )
    .then((response) => response.json())
    .then((data) => {
        setFormData(data);
    });
  
  }, []);

      return (
        <div>
           <Formik initialValues={formData} enableReinitialize>
           <Form> 
               <FieldArray name="users" key={1}>
                  <Users users={formData} 
                  handleAdd={formData}
                  handleEdit={formData}
                  />
                  
               </FieldArray>
          </Form>
          </Formik>
        </div>
      )
    }


export default UserTable;