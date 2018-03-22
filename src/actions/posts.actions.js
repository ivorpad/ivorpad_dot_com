import axios from 'axios';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED
} from '../constants/index';

const getData = async (url) => await axios.get(url);

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

export const fetchPosts = (url) => {
  return function(dispatch) {

    dispatch(fetchRequest(true));
    getData(url).then(posts => {
      dispatch(fetchRequest(false))
      dispatch(fetchSuccess(posts.data)) 
    });
  }
}