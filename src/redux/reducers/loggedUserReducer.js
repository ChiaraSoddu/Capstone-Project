import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  username: null,
  token: null,
  id:null
}

const loggedUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        state: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        state: action.payload
      }
    default:
      return state;
  }
}

export default loggedUserReducer;