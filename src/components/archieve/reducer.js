import { configureStore } from '@reduxjs/toolkit'

import postsReducer from  '../src/components/features/posts/postsSlice';
import usersReducer from '../src/components/features/users/userSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})