import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import users from "../features/users/userSlice";
import posts from "../features/posts/postSlice";


const rootReducer = combineReducers({
   users: users,
   posts: posts
})

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

