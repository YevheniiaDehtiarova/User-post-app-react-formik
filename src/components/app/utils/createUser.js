function createUser(object) {
  const user =  {
    id: object.id ? object.id : "",
    firstName: object.firstName,
    lastName: object.lastName,
    userName: object.userName,
    email: object.email,
    address: {
      street: object.streetName,
      building: object.building,
      city: object.city,
      zipcode: object.zipcode,
    },
    phone: object.phone,
    website: object.website,
    company: {
      name: object.companyName,
      scope: object.companyScope,
    },
  };
  return user;
}

export default createUser;
