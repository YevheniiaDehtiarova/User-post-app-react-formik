import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer'



const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  users: userReducer,
  posts: postReducer
 /*todos: todosReducer,
  filters: filtersReducer,*/
})

export default rootReducer