import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import { useState, useEffect } from "react";
import Users from "../users/Users"

const UserTable = () => {

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:3000/users',
    )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
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