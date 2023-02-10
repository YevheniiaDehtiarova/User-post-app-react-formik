import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";


const usersAdapter = createEntityAdapter();/*вернет обьект с колбэками, методами*/

/*const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: "idle",
});*/

 const initialState = {
   users: [],
 };



const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userCreated: (state, action) => {
      //state.heroes.push(action.payload);
      usersAdapter.addOne(state, action.payload);
    },
    userDeleted: (state, action) => {
      usersAdapter.removeOne(state,action.payload);
      //state.heroes = state.heroes.filter((item) => item.id !== action.payload);
    },
  },
 
});

const { actions, reducer } = userSlice;

export default reducer;

export const {selectAll} = usersAdapter.getSelectors(state => state.heroes)

export const {  userCreated, userDeleted } = actions;
