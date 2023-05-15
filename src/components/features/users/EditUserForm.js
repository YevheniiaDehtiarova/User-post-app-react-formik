import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import  UserTable  from '../../user-table/UserTable';
import { useParams } from "react-router-dom";

import { userUpdated } from './userSlice';

export const EditUserForm = ({ }) => {

  const { userId } = useParams();
  console.log(userId)

  const user = useSelector((state) =>
    state.users.find((user) => user.id == userId)
  )

  console.log(user)

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(user.address.street);
  const [building, setBuilding] = useState(user.address.building);
  const [city, setCity] = useState(user.address.city);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [companyName, setCompanyName] = useState(user.company.name);
  const [companyScope, setCompanyScope] = useState(user.company.scope);

  const dispatch = useDispatch()
  const history = useNavigate()


  const onSaveUserClicked = () => {
    if (firstName && lastName && email && street && building && city && zipcode && phone && website && companyName && companyScope) {
      dispatch(userUpdated({ id: userId, firstName, lastName, street,building,city,zipcode,phone,website,companyName,companyScope }))
      history.push(`/users/${userId}`)
    }
  }

  const handleFirstNameOnChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameOnChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUserNameOnChange = (event) => {
    setUserName(event.target.value);
  };
  const handleEmailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const handleStreetOnChange = (event) => {
    setStreet(event.target.value);
  };
  const handleBuildingOnChange = (event) => {
    setBuilding(event.target.value);
  };
  const handleCityOnChange = (event) => {
    setCity(event.target.value);
  };
  const handleZipcodeOnChange = (event) => {
    setZipcode(event.target.value);
  };
  const handlePhoneOnChange = (event) => {
    setPhone(event.target.value);
  };
  const handleSiteOnChange = (event) => {
    setWebsite(event.target.value);
  };
  const handleCompanyNameOnChange = (event) => {
    setCompanyName(event.target.value);
  };
  const handleCompanyScopeOnChange = (event) => {
    setCompanyScope(event.target.value);
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, "enter the name")
      .max(50, "the name is too long")
      .required("Required"),
    lastName: Yup.string()
      .min(5, "enter valid lastname")
      .max(50, "last name too long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
    <h1>Add/Edit User</h1>
    <Formik
      enableReinitialize
      initialValues={{
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        userName: userName ?? "",
        email: email ?? "",
        street: street ?? "",
        building: building ?? "",
        city: city ?? "",
        zipcode: zipcode ?? "",
        phone: phone ?? "",
        website: website ?? "",
        companyName: companyName ?? "",
        companyScope: companyScope ?? "",
      }}
      validationSchema={validationSchema}
    >
      <Form className="user-form-block">
        <label htmlFor="firstName">Enter Firstname</label>
        <Field
          id="firstName"
          name="firstName"
          onChange={handleFirstNameOnChange}
        />

        <label htmlFor="lastName">Enter Lastname</label>
        <Field
          id="lastName"
          name="lastName"
          onChange={handleLastNameOnChange}
        />

        <label htmlFor="userName">Enter Username</label>
        <Field
          id="userName"
          name="userName"
          onChange={handleUserNameOnChange}
        />

        <label htmlFor="email">Enter Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          onChange={handleEmailOnChange}
        />

        <label htmlFor="streetName">Enter street</label>
        <Field
          id="streetName"
          name="streetName"
          onChange={handleStreetOnChange}
        />

        <label htmlFor="building">Enter building</label>
        <Field
          id="building"
          name="building"
          onChange={handleBuildingOnChange}
        />

        <label htmlFor="city">Enter city</label>
        <Field id="city" name="city" onChange={handleCityOnChange} />

        <label htmlFor="zipcode">Enter zipcode</label>
        <Field
          id="zipcode"
          name="zipcode"
          onChange={handleZipcodeOnChange}
        />

        <label htmlFor="phone">Enter phone</label>
        <Field id="phone" name="phone" onChange={handlePhoneOnChange} />

        <label htmlFor="website">Enter website</label>
        <Field id="website" name="website" onChange={handleSiteOnChange} />

        <label htmlFor="companyName">Enter companyName</label>
        <Field
          id="companyName"
          name="companyName"
          onChange={handleCompanyNameOnChange}
        />

        <label htmlFor="companyScope">Enter companyScope</label>
        <Field
          id="companyScope"
          name="companyScope"
          onChange={handleCompanyScopeOnChange}
        />

        <div className="user-from-btn-block">
          <Link to="/"><UserTable /></Link>
          <button
            className="user-form-btn"
            type="submit"
            onClick={onSaveUserClicked}
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  </div>
  
  )
}
