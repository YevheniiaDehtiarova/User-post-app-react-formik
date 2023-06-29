const initialState = []


export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'posts/postsFetched': {
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
