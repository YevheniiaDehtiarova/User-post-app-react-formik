/*import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
/*import userSlice from "../features/users/userSlice";
import postSlice from "../features/posts/postSlice";*/
import {createStore} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools()
)


/*const rootReducer = combineReducers({
   users: userSlice,
   posts: postSlice
})*/
/*const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});*/
/*export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});*/

export default store;

