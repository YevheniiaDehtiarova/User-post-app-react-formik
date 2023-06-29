const initialState = []


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'users/usersFetched': {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {},
      ]
    }
    default:
      return state
  }
}
