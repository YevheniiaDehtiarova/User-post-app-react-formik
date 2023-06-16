const users = (state = {}, action) => { // add initial state
    switch(action.type){
        case "USERS_FETCHED":
            return {
                ...state,
                users: action.payload,
            }
        case "USER_ADDED":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "USER_EDITED":
                return {
                    ...state,
                    user: action.payload,
                    loggedIn: true
                }
    
        default:
            return state
    }
}

export default users;
