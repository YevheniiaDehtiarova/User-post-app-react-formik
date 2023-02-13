import "./UserForm.css";
import React, { useEffect, createRef } from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useHttp } from "../hooks/http.hook";
import { useFormik } from "formik";
import * as Yup from 'yup';

const UserForm = ({ active, setActive, row }) => {
  console.log(active, "STATUS");
  console.log(row, "СТРОКА");
  const handleClose = () => setActive(false);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyScope, setCompanyScope] = useState("");

  const { request } = useHttp();

  useEffect(() => {
   console.log("!!!!!!!!!!!!!!!!!!", row?.original);
    setFirstName(row?.original?.firstName);
    setLastName(row?.original.lastName);
    setUserName(row?.original.userName);
    setEmail(row?.original.email);
    setStreet(row?.original.address.street);
    setBuilding(row?.original.address.building);
    setCity(row?.original.address.city);
    setZipcode(row?.original.address.zipcode);
    setPhone(row?.original.phone);
    setWebsite(row?.original.website);
    setCompanyName(row?.original.company.name);
    setCompanyScope(row?.original.company.scope);

  }, [row]);

  const onSubmitHandler = (e, values) => {
    console.log('SUBMIT WORKS');
    e.preventDefault();
    console.log(e, 'EVENT')
    console.log(row?.original);

    console.log(values, 'VALUES');
    /*const newUser = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      street: street,
      building: building,
      city: city,
      zipcode: zipcode,
      phone: phone,
      website: website,
      companyName: companyName,
      companyScope: companyScope,
    };*/

    /*console.log(newUser, 'NEW USER');*/

    /*request("http://localhost:3000/users", "POST", JSON.stringify(newUser))
      .then((res) => res)
      .catch((err) => console.log(err));*/

    // Очищаем форму после отправки
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setStreet("");
    setBuilding("");
    setCity("");
    setZipcode("");
    setPhone("");
    setWebsite("");
    setCompanyName("");
    setCompanyScope("");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  })

  


  return (
    active && (
      <div>
        <h1>Add/Edit User</h1>
        {/* {row && ( */}
        <Formik enableReinitialize
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
          onSubmit={() => { console.log("submit!"); }}
          validationSchema={validationSchema}
        >
          <Form>
            <label htmlFor="firstName">Enter Firstname</label>
            <Field id="firstName" name="firstName" value={firstName ?? ""} />

            <label htmlFor="lastName">Enter Lastname</label>
            <Field id="lastName" name="lastName" />

            <label htmlFor="userName">Enter Username</label>
            <Field id="userName" name="lastName" />

            <label htmlFor="email">Enter Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />

            <label htmlFor="streetName">Enter street</label>
            <Field id="streetName" name="streetName" />

            <label htmlFor="building">Enter building</label>
            <Field id="building" name="building" />

            <label htmlFor="city">Enter city</label>
            <Field id="city" name="city" />

            <label htmlFor="zipcode">Enter zipcode</label>
            <Field id="zipcode" name="zipcode" />

            <label htmlFor="phone">Enter phone</label>
            <Field id="phone" name="phone" />

            <label htmlFor="website">Enter website</label>
            <Field id="website" name="website" />

            <label htmlFor="companyName">Enter companyName</label>
            <Field id="companyName" name="companyName" />

            <label htmlFor="companyScope">Enter companyScope</label>
            <Field id="companyScope" name="companyScope" />

            <button onClick={handleClose}>x</button>

            <button type="submit" onClick={onSubmitHandler}>Submit</button>
          </Form>
        </Formik>
      </div>
    )
  );
};

export default UserForm;
