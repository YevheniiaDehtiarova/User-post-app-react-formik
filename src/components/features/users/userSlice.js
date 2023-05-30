import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import userRoutes from "../../app/routes/user.routes";
//import axios from "axios";

const usersAdapter = createEntityAdapter();

/*const initialState = usersAdapter.getInitialState({
  heroesLoadingStatus: "idle",
});*/

 const initialState = {
   users: [],
   usersLoadingStatus: "idle",
 };

/*export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  () => {
    console.log('devgxdsvgdg');
    const { request } = useHttp();
    return request(userRoutes.getUsers);
  }
);*/

/*export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const { data } = await axios.get(
      userRoutes.getUsers
    );
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error");
  }
});*/

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await  userRoutes.getUsers;
    console.log(response)
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userCreated: (state, action) => {
      state.users.push(action.payload);
      //usersAdapter.addOne(state, action.payload);
    },
    userDeleted: (state, action) => {
      //usersAdapter.removeOne(state,action.payload);
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending,(state) => {
      state.usersLoadingStatus = "loading"})
    .addCase(fetchUsers.fulfilled,(state, action) => {
      state.usersLoadingStatus = "idle";
      usersAdapter.setAll(state,action.payload);
    })
    .addCase(fetchUsers.rejected,(state) => {
      state.usersLoadingStatus = "error";
    })
    .addDefaultCase(()=>{})
  }
});

const { actions, reducer } = userSlice;

export default reducer;

export const {selectAll} = usersAdapter.getSelectors(state => state.users)

export const { usersFetching, usersFetched, usersFetchingError, userCreated, userDeleted } = actions;
