import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import Users from "../users/Users";
import {useSelector, useDispatch } from 'react-redux'
//import { getUsers } from "../features/users/userSlice";
import React, {useEffect} from 'react';


const UserTable = () => {

  const users = useSelector((state)=> state.userS)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('USE EFFETC WORKS');
    dispatch([])
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
