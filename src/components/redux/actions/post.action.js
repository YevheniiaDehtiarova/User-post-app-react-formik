import postRoutes from '../../app/routes/post.routes'


const fetchPosts = (request) => (dispatch) => {
    dispatch(postsFetching(postRoutes.getAll));
    request().then((data) => dispatch(postsFetched(data)));
    //.catch(() => dispatch(heroesFetchingError()));
  };
  
  const postsFetching = () => {
    return {
      type: "POSTS_FETCHING",
    };
  };
  
  const postsFetched = (users) => {
    return {
      type: "POSTS_FETCHED",
      payload: users,
    };
  };


const postAdded = (postObj) => {
    return {
        type: "POST_ADDED",
        payload: postObj
    }
}

const postEdited = (postObj) => {
    return {
        type: "POST_EDITED",
        payload: postObj
    }
}

const postDeleted = (id) => {
    return {
        type: "POST_DELETED",
        payload: id
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    postAdded,
    postEdited,
    postDeleted,
    fetchPosts,
    postsFetching,
    postsFetched
}