import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        "id": 11,
        "userId": "13",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut12gyhkh777888",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "id": 12,
        "userId": "13",
        "title": "dolorum ut in voluptas mollitia et saepe quo animirfhbdrfhndfhgdfh",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
      },
      {
        "id": 13,
        "title": "gulротао",
        "body": "y7oul",
        "userId": 13
      },
      {
        "title": "ACfsv",
        "body": "gsdbsdbh",
        "id": 14
      },
      {
        "title": "SVz",
        "body": "vzsdbg",
        "id": 15
      },
      {
        "id": 117,
        "title": "svdxs",
        "body": "sxdbdxhb"
      },
      {
        "id": 126,
        "title": "aaaaaaaaaaaaaaa7",
        "body": "777777777",
        "userId": 8
      },
      {
        "title": "gul",
        "body": "y7oul",
        "userId": 13,
        "id": 13
      }
]

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
