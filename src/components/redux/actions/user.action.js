import userRoutes from "../../app/routes/user.routes";

const fetchUsers = (request) => (dispatch) => {
  dispatch(usersFetching(userRoutes.getUsers));
  request().then((data) => dispatch(usersFetched(data)));
  //.catch(() => dispatch(heroesFetchingError()));
};

const usersFetching = () => {
  return {
    type: "USERS_FETCHING",
  };
};

const usersFetched = (users) => {
  return {
    type: "USERS_FETCHED",
    payload: users,
  };
};

const userAdded = (userObj) => {
  return {
    type: "USER_ADDED",
    payload: userObj,
  };
};

const userEdited = (userObj) => {
  return {
    type: "USER_EDITED",
    payload: userObj,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userAdded,
  userEdited,
  usersFetched,
  fetchUsers,
  usersFetching,
};
