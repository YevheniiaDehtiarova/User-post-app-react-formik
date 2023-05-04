import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import { useState, useEffect } from "react";
import Users from "../users/Users";
import userRoutes from "../app/routes/user.routes";
import axios from "axios";

const UserTable = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get(userRoutes.getUsers).then((data) => {
      setFormData(data.data);
    });
  }, []);

  return (
    <div>
      <Formik initialValues={formData} enableReinitialize>
        <Form>
          <FieldArray name="users" key={1}>
            <Users users={formData} />
          </FieldArray>
        </Form>
      </Formik>
    </div>
  );
};

export default UserTable;
