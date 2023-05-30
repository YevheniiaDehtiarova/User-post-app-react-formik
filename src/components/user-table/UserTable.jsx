import "./UserTable.css";
import { Formik, Form, FieldArray } from "formik";
import Users from "../users/Users";
import {useSelector, useDispatch } from 'react-redux'
import React, {useEffect,useCallback} from 'react';
import {fetchUsers} from '../features/users/userSlice';


const UserTable = () => {

  const users = useSelector((state)=> state.users)
  const dispatch = useDispatch();

 /* const newUsers  =  useEffect(() => {
    console.log('USE EFFETC WORKS');
    dispatch(fetchUsers())
  }, [dispatch])*/

 const newUsers = useCallback(() => {
    console.log("Async Data CALLED");
    dispatch(fetchUsers());
  }, [dispatch]);


 console.log(users,  newUsers, 'USERS FROM USER TABLE')

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
