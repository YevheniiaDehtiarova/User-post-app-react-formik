import "./user-form.css";
import React from 'react';
import { useState } from "react";
import { Formik, Field, Form } from 'formik';
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useHttp } from "../hooks/http.hook";
import { userCreated } from "../users/userSlice";

const UserForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [building, setbuilding] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyScope, setCompanyScope] = useState("");

  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Генерация id через библиотеку
    const newUser = {
      id: uuidv4(),
      firstName: firstName,
      lastName:  lastName,
      userName:  userName,
      email: email, 
      street: street,  
      building:  building,
      city:  city,
      zipcode:  zipcode,
      phone:  phone,
      website: website, 
      companyName:  companyName,
      companyScope: companyScope
   
    };

    request("http://localhost:3000/users", "POST", JSON.stringify(newUser))
      .then((res) => (res, "Отправка успешна"))
      .then(dispatch(userCreated(newUser)))
      .catch((err) => console.log(err));

    // Очищаем форму после отправки
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setStreet("");
    setbuilding("");
    setCity("");
    setZipcode("");
    setPhone("");
    setWebsite("");
    setCompanyName("");
    setCompanyScope("");
  };

  
      return (
        <div>
           <h1>Sign Up</h1>
    <Formik
      initialValues={{
        id:  '',
        firstName:  '',
        lastName:  '',
        userName:  '',
        email:  '',
        street:  '',
        building:  '',
        city:  '',
        zipcode:  '',
        phone:  '',
        website:  '',
        companyName:  '',
        companyScope: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form onSubmit={onSubmitHandler}>
        <label htmlFor="firstName">Enter Firstname</label>
        <Field id="firstName" name="firstName"  />

        <label htmlFor="lastName">Enter Lastname</label>
        <Field id="lastName" name="lastName"  />

        
        <label htmlFor="userName">Enter Username</label>
        <Field id="userName" name="lastName"  />

        <label htmlFor="email">Enter Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

         <label htmlFor="streetName">Enter street</label>
         <Field id="streetName" name="streetName"  />

         <label htmlFor="building">Enter building</label>
         <Field id="building" name="building"  />

         <label htmlFor="city">Enter city</label>
         <Field id="city" name="city"  />

         <label htmlFor="zipcode">Enter zipcode</label>
         <Field id="zipcode" name="zipcode" />

         <label htmlFor="phone">Enter phone</label>
         <Field id="phone" name="phone" />

         <label htmlFor="website">Enter website</label>
         <Field id="website" name="website" />

         <label htmlFor="companyName">Enter companyName</label>
        <Field id="companyName" name="companyName"  />

        <label htmlFor="companyScope">Enter companyScope</label>
        <Field id="companyScope" name="companyScope"  />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
        </div>
      )
    }


export default UserForm;