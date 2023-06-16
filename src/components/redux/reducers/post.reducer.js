const posts = (state = {}, action) => { //add initial state
  switch (action.type) {
    case "POSTS_FETCHED":
      return {
        ...state,
        posts: action.payload,
      };
    case "POST_ADDED":
      return {
        ...state,
        post: action.payload,
      };
    case "POST_EDITED":
      return {
        ...state,
        post: action.payload,
      };
    case "POST_DELETED":
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};

export default posts;
