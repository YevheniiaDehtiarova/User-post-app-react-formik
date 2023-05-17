import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import Users from "../users/Users";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, selectAllUsers } from "../features/users/userSlice";
import React, { useEffect } from 'react'

const UserTable = () => {
  //const users = useSelector((state) => state.users);
  const dispatch = useDispatch()


  useEffect(() => {
      dispatch(fetchUsers())
  }, [dispatch])

  const users = selectAllUsers;

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
