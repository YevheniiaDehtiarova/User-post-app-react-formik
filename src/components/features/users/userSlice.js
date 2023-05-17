import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../app/routes/client';
import  userRoutes  from '../../app/routes/user.routes';
import axios from "axios";

const initialState = [];

/*useEffect(() => {
  axios.get(userRoutes.getUsers).then((data) => {
    setFormData(data.data);
  });
}, []);*/

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
/*export const fetchUsers = createAsyncThunk(userRoutes.getUsers, async () => {
  const response = await client.get(userRoutes.getUsers);
  console.log(response)
  return response.data
})*/

export function fetchUsers() {
  return function(dispatch) {
    return axios.get(userRoutes.getUsers)
      .then(({ data }) => {
      dispatch(setUsers(data));
    });
  };
}

export const { userAdded, userUpdated} = usersSlice.actions

export default usersSlice.reducer

//export const selectAllUsers = state => state.users;

/*export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)*/