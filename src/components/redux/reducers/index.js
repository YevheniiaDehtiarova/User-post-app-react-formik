import {combineReducers} from 'redux';
import users from './user.reducer';
import posts from './post.reducer';

const rootReducer = combineReducers({
    users,
    posts
})

export default rootReducer