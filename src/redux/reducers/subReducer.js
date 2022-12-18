import {SUB } from "../actions";

const initState = {
  subtype: null,
  exp: null,
  start:null
}

const subReducer = (state = initState, action) => {
  switch(action.type) {
    case SUB:
      return {
        ...state,
        state: action.payload
      }
    
    default:
      return state;
  }
}

export default subReducer;