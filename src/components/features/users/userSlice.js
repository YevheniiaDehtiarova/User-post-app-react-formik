import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        "id": 8,
        "firstName": "Евгения777",
        "lastName": "Дегтярева",
        "email": "jeni4ka2509@gmail.com",
        "address": {
          "street": "просп. Победы,",
          "building": "78",
          "city": "Харьков",
          "zipcode": "61204-####"
        },
        "phone": "+380661618617",
        "website": "77",
        "company": {
          "name": "1",
          "scope": "1"
        }
      },
      {
        "id": 11,
        "firstName": "Евгения",
        "lastName": "Дегтярева",
        "email": "jeni4ka2509@gmail.com",
        "address": {
          "street": "просп. Победы, 78",
          "building": "777",
          "city": "Харьков",
          "zipcode": "61204-####"
        },
        "phone": "+380661618617",
        "website": "5",
        "company": {
          "name": "5",
          "scope": "5"
        }
      },
      {
        "id": 12,
        "firstName": "YEVHENIIA",
        "lastName": "DEHTIAROVA",
        "username": "7",
        "email": "jeni4ka2509@gmail.com",
        "address": {
          "street": "9 Bolotnikova st.",
          "building": "8",
          "city": "Kharkiv",
          "zipcode": "61204-####"
        },
        "phone": "+380661618617",
        "website": "88",
        "company": {
          "name": "99",
          "scope": "....00"
        }
      },
      {
        "id": 13,
        "firstName": "YEVHENIIA",
        "lastName": "DEHTIAROVA",
        "username": "5",
        "email": "jeni4ka2509@gmail.com",
        "address": {
          "street": "9 Bolotnikova st.",
          "building": "8",
          "city": "Luhansk",
          "zipcode": "61204-####"
        },
        "phone": "+380661618617",
        "website": "7",
        "company": {
          "name": "8",
          "scope": "8"
        }
      },
      {
        "id": 14,
        "firstName": "Dmytro",
        "lastName": "Batichshev",
        "username": "dimo4ka",
        "email": "mrdee1987@gmail.com",
        "address": {
          "street": "Peremogy avenue",
          "building": "78",
          "city": "Kharkiv",
          "zipcode": "61002"
        },
        "phone": "+380677116862",
        "website": "---",
        "company": {
          "name": "nix",
          "scope": "it"
        }
      },
      {
        "id": 15,
        "firstName": "tatiana",
        "lastName": "dehtiarova",
        "username": "77777",
        "email": "8888@gmail.com",
        "address": {
          "street": "777",
          "building": "888",
          "city": "888",
          "zipcode": "8888"
        },
        "phone": "9999",
        "website": "8888",
        "company": {
          "name": "sdghdfh",
          "scope": "xdshedrf"
        }
      },
      {
        "id": 16,
        "firstName": "helen",
        "lastName": "alyoushina",
        "username": "dfh",
        "email": "555@gmail.com",
        "address": {
          "street": "eswgt",
          "building": "esh",
          "city": "77",
          "zipcode": "77"
        },
        "phone": "+380661618617",
        "website": "tgk,",
        "company": {
          "name": "gctkl",
          "scope": "lyhl"
        }
      },
      {
        "id": 17,
        "firstName": "77779999",
        "lastName": "88889999",
        "username": "dejfr",
        "email": "tgfymj@gmail.com",
        "address": {
          "street": "ul",
          "building": "jui;p.",
          "city": "8",
          "zipcode": "8"
        },
        "phone": "+380661618617",
        "website": "swf",
        "company": {
          "name": "d  vg",
          "scope": "88"
        }
      },
      {
        "id": 18,
        "firstName": "Yevheniia",
        "lastName": "Dehtiarova8",
        "userName": "7",
        "email": "yevheniia.dehtiarova@nixsolutions.com",
        "address": {
          "street": "karazina",
          "building": "7",
          "city": "Budapest",
          "zipcode": "7"
        },
        "phone": "+380 66 1618617",
        "website": "7",
        "company": {
          "name": "xbnf",
          "scope": "8888"
        }
      },
      {
        "id": 19,
        "firstName": "Yevheniia",
        "lastName": "Dehtiarova",
        "userName": "7",
        "email": "yevheniia.dehtiarova@nixsolutions.com",
        "address": {
          "street": " fhncvgfhj",
          "building": "7",
          "city": "Budapest",
          "zipcode": "41"
        },
        "phone": "+380 66 1618617",
        "website": "7",
        "company": {
          "name": "7",
          "scope": "8"
        }
      },
      {
        "id": 20,
        "firstName": "Yevheniia",
        "lastName": "Dehtiarova",
        "email": "",
        "address": {
          "street": "karazina"
        },
        "company": {
          "scope": "777777"
        }
      },
      {
        "id": 21,
        "firstName": "Yevheniia",
        "lastName": "Dehtiarova",
        "userName": "8",
        "email": "yevheniia.dehtiarova@nixsolutions.com",
        "address": {
          "street": "karazina",
          "building": "7",
          "city": "Budapest",
          "zipcode": "7"
        },
        "phone": "+380 66 1618617",
        "website": "444",
        "company": {
          "name": "8",
          "scope": "8"
        }
      },
      {
        "id": 22,
        "firstName": "Yevheniia",
        "lastName": "Dehtiarova777777777",
        "address": {},
        "company": {
          "name": "xbnf",
          "scope": "7777"
        }
      },
      {
        "id": 23,
        "firstName": "Yevheniia",
        "lastName": "Dehtiarova",
        "userName": "sfcsdf",
        "email": "yevheniia.dehtiarova@nixsolutions.com",
        "address": {
          "street": "karazina",
          "building": "2",
          "city": "kharkiv",
          "zipcode": "61000"
        },
        "phone": "+380 66 1618617",
        "website": "\\fvs",
        "company": {
          "name": "xbnf",
          "scope": "777777"
        }
      }   
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
    },
    userUpdated(state, action) {
      const { id, firstName,lastName,userName,email,address,phone,website,company } = action.payload
      const existingUser = state.find((post) => post.id === id)
      if (existingUser) {
        existingUser.firstName = firstName
        existingUser.lastName = lastName
        existingUser.userName = userName
        existingUser.email = email
        existingUser.address = address
        existingUser.phone = phone
        existingUser.website = website
        existingUser.company = company
      }
    },
  },
})

export const { userAdded, userUpdated} = usersSlice.actions

export default usersSlice.reducer