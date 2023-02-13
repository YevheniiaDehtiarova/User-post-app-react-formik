import "./UserForm.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useHttp } from "../hooks/http.hook";
import * as Yup from 'yup';
import userRoutes from "../app/routes/user.routes";

const UserForm = ({ active, setActive, row }) => {
  console.log(active, "STATUS");
  console.log(row, "СТРОКА");
  const handleClose = () => setActive(false);


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
   //console.log("!!!!!!!!!!!!!!!!!!", row?.original);
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

   const newUser =  {
    id: row ? row.id : '',
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    email: email,
    address: {
      street: street,
      building: building,
      city: city,
      zipcode: zipcode,
    },
    phone: phone,
    website: website,
    company: {
      name: companyName,
      scope: companyScope,
    },
  };

  console.log(newUser);

   if(!row) {
    console.log('будем создавать юзера');
  
    request(userRoutes.createUser, "POST", JSON.stringify(newUser))
      .then((res) => res)
      .catch((err) => console.log(err));

   } else {
    console.log('будем обновлять юзера');
    const apiUrl = userRoutes.updateUser.replace('${id}', newUser.id);

    request(apiUrl, "PUT", JSON.stringify(newUser))
    .then((res) => res)
    .catch((err) => console.log(err));
   }

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

  const handleFirstNameOnChange = (event) => {
    setFirstName(event.target.value);
  }
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
  }
  const handleZipcodeOnChange = (event) => {
    setZipcode(event.target.value);
  }
  const handlePhoneOnChange = (event) => {
    setPhone(event.target.value);
  }
  const handleSiteOnChange = (event) => {
    setWebsite(event.target.value);
  }
  const handleCompanyNameOnChange = (event) => {
    setCompanyName(event.target.value);
  }
  const handleCompanyScopeOnChange = (event) => {
    setCompanyScope(event.target.value);
  }

  return (
    active && (
      <div>
        <h1>Add/Edit User</h1>
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
          validationSchema={validationSchema}
        >
          <Form>
            <label htmlFor="firstName">Enter Firstname</label>
            <Field id="firstName" name="firstName" onChange={handleFirstNameOnChange}/>

            <label htmlFor="lastName">Enter Lastname</label>
            <Field id="lastName" name="lastName" onChange={handleLastNameOnChange}/>

            <label htmlFor="userName">Enter Username</label>
            <Field id="userName" name="userName" onChange={handleUserNameOnChange} />

            <label htmlFor="email">Enter Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              onChange={handleEmailOnChange}
            />

            <label htmlFor="streetName">Enter street</label>
            <Field id="streetName" name="streetName" onChange={handleStreetOnChange}
             />

            <label htmlFor="building">Enter building</label>
            <Field id="building" name="building" onChange={handleBuildingOnChange} />

            <label htmlFor="city">Enter city</label>
            <Field id="city" name="city" onChange={handleCityOnChange} />

            <label htmlFor="zipcode">Enter zipcode</label>
            <Field id="zipcode" name="zipcode" onChange={handleZipcodeOnChange}/>

            <label htmlFor="phone">Enter phone</label>
            <Field id="phone" name="phone" onChange={handlePhoneOnChange}/>

            <label htmlFor="website">Enter website</label>
            <Field id="website" name="website" onChange={handleSiteOnChange}/>

            <label htmlFor="companyName">Enter companyName</label>
            <Field id="companyName" name="companyName" onChange={handleCompanyNameOnChange}/>

            <label htmlFor="companyScope">Enter companyScope</label>
            <Field id="companyScope" name="companyScope" onChange={handleCompanyScopeOnChange}/>

            <button onClick={handleClose}>x</button>

            <button type="submit" onClick={onSubmitHandler}>Submit</button>
          </Form>
        </Formik>
      </div>
    )
  );
};

export default UserForm;
