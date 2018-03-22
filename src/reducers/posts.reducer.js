import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED
} from  '../constants/index'


export const postsLoading = (state = false, action) => {
  switch(action.type) {
    case FETCH_REQUEST: 
      return action.isLoading;
    default:
      return state
  }
}

export const posts = (state = [], action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      return action.payload
    default: 
      return state
  }
}