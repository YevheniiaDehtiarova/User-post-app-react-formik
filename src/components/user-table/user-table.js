import "./user-table.css";
import { Formik, Form, FieldArray } from "formik";
import { useState, useEffect } from "react";
import Users from "../users/users";
import Input from "../input/input"


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
                  handleAdd={formData.push}
                  handleEdit={formData.splice(1, 1)}
                  />
                  
               </FieldArray>
          </Form>
          </Formik>
        </div>
      )
    }


export default UserTable;