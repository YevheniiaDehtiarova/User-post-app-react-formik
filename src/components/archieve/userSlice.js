import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import  userRoutes  from '../app/routes/user.routes';
import axios from 'axios';



const initialState = [];

/*export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await fetch(userRoutes.getUsers).then((res)=> {
    console.log(res);
    res.json();
  })
})*/
export const getUsers = createAsyncThunk('users/getUsers',  () => {
  return  axios.get(userRoutes.getUsers).then((response)=> {
    console.log(response);
    //res.json();
    response.data.map((user) => user.id)
  })
})
/*export const getUsers =  axios.get(userRoutes.getUsers).then((res) => {
  console.log(res.data)
  return res.data
})*/

/*useEffect(() => {
  axios.get(userRoutes.getUsers).then((data) => {
    setFormData(data.data);
  });
}, []);*/

const usersSlice = createSlice({
  name: 'user',
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
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled, (state,action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(getUsers.rejected, (state,action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
  /*extraReducers: {
    [getUsers.pending]: (state, action) => {
           state.loading = true
    },
    [getUsers.fulfilled]: (state,action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getUsers.rejected]:(state,action) => {
      state.loading = false;
    }
  }*/
})




export const { userAdded, userUpdated,} = usersSlice.actions

export default usersSlice.reducer;

//export const selectAllUsers = state => state.users;

/*export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)*/