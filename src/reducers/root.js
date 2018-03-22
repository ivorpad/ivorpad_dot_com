import { combineReducers } from 'redux';
import { postsLoading, posts } from './posts.reducer';

const rootReducer = combineReducers({
  postsLoading,
  posts
});

export default rootReducer;