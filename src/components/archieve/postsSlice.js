import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId: userId
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, body } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.body = body
      }
    },
    postDeleted(state,action){
   ///add later
    }
  },
})

export const { postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer
