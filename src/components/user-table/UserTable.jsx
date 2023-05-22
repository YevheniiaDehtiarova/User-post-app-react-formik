import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import Users from "../users/Users";
import {useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../features/users/userSlice";
import React, { useEffect } from 'react'

const UserTable = () => {

  const {users, loading} = useSelector((state)=> state.users)

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUsers())
  }, [dispatch])



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
