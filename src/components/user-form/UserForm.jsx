import "./user-form.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useHttp } from "../hooks/http.hook";
import { userCreated } from "../users/userSlice";

const UserForm = ({ active, setActive, row }) => {
  console.log(active, "STATUS");
  console.log(row, "СТРОКА");
  const handleClose = () => setActive(false);

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

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!!!", row?.original?.firstName);
    setFirstName(row?.original?.firstName);// засетили имя 
  }, [row]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newUser = {
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
    };

    console.log(newUser);

    request("http://localhost:3000/users", "POST", JSON.stringify(newUser))
      .then((res) => res)
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
/*почитать как менять инишл велью в формике*/
  return (
    active && (
      <div>
        <h1>Add/Edit User</h1>
        {/* {row && ( */}
        <input value={firstName} onChange={() => {}} />
        <Formik
          initialValues={{
            id: row?.id ?? "",
            firstName: row?.firstName ?? "",
            lastName: row?.lastName ?? "",
            userName: row?.userName ?? "",
            email: row?.email ?? "",
            street: row?.street ?? "",
            building: row?.building ?? "",
            city: row?.city ?? "",
            zipcode: row?.zipcode ?? "",
            phone: row?.phone ?? "",
            website: row?.website ?? "",
            companyName: row?.companyName ?? "",
            companyScope: row?.companyScope ?? "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form onSubmit={onSubmitHandler}>
            <label htmlFor="firstName">Enter Firstname</label>
            <Field id="firstName" name="firstName" />

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

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        {/* )} */}
      </div>
    )
  );
};

export default UserForm;
