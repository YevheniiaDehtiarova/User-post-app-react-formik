import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http"
import postRoutes from "../../app/routes/post.routes";

const postsAdapter = createEntityAdapter();/*вернет обьект с колбэками, методами*/

/*const initialState = postsAdapter.getInitialState({
  heroesLoadingStatus: "idle",
});*/

 const initialState = {
   posts: [],
   postsLoadingStatus: "idle",
 };

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  () => {
    const { request } = useHttp();
    return request(postRoutes.getAll);
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postCreated: (state, action) => {
      state.posts.push(action.payload);
      //postsAdapter.addOne(state, action.payload);
    },
    postDeleted: (state, action) => {
      //postsAdapter.removeOne(state,action.payload);
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending,(state) => {
      state.postsLoadingStatus = "loading"})
    .addCase(fetchPosts.fulfilled,(state, action) => {
      state.postsLoadingStatus = "idle";
      postsAdapter.setAll(state,action.payload);
    })
    .addCase(fetchPosts.rejected,(state) => {
      state.postsLoadingStatus = "error";
    })
    .addDefaultCase(()=>{})
  }
});

const { actions, reducer } = postSlice;

export default reducer;

export const {selectAll} = postsAdapter.getSelectors(state => state.posts)

export const { postsFetching, postsFetched, postsFetchingError, postCreated, postDeleted } = actions;
