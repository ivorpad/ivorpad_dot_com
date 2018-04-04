import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED
} from '../constants/index';

import { getData } from '../helpers';


export const fetchRequest = (bool) => {
  return {
    type: FETCH_REQUEST,
    isLoading: bool
  }
}

export const fetchSuccess = (posts) => {
  return {
    type: FETCH_SUCCESS,
    payload: posts
  }
}

export const fetchFailed = (error) => {
  return {
    type: FETCH_FAILED,
    error
  }
}

export const fetchPosts = (url, pagesToFetch) => {
  return function(dispatch) {

    dispatch(fetchRequest(true));
    getData(`${url}?per_page=${pagesToFetch}`).then(posts => {
      dispatch(fetchRequest(false))
      dispatch(fetchSuccess(posts.data)) 
    });
  }
}