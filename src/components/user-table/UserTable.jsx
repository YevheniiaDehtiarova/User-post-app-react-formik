import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import Users from "../users/Users";
import { useSelector } from 'react-redux'

const UserTable = () => {
  const users = useSelector((state) => state.users);

  console.log(users, 'USERS FROM USER TABLE')

  return (
    <div>
      <Formik initialValues={users} enableReinitialize>
        <Form>
          <FieldArray name="users" key={1}>
            <Users users={users} />
          </FieldArray>
        </Form>
      </Formik>
    </div>
  );
};

export default UserTable;
