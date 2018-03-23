import React, { Component } from 'react';
import './App.css';
import './index.css'
import axios from 'axios';
import TopNav from './components/TopNav';
import Blog from './components/Blog'
import HomePage from './components/HomePage'
import SinglePost from './components/SinglePost';
import About from './components/About';
import Contact from './components/Contact';
import MainRoutes from './components/MainRoutes'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux'
import RootReducer from './reducers/root';
import thunkMiddleware from 'redux-thunk';
import { fetchPosts } from './actions/posts.actions';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App helvetica">
            <TopNav />
            <div className="mw9 center ph3-ns">
              <div className="cf ph2-ns">
                <MainRoutes />
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const history = createHistory();
const routerMiddlewareWithHistory = routerMiddleware(history);

const store = createStore(combineReducers({
  data: RootReducer,
  router: routerReducer
}),
  applyMiddleware(thunkMiddleware, routerMiddlewareWithHistory)
);

const API_URL = `//localhost/wordpress/wp-json/wp/v2/posts`
const MAX_PAGES_TO_FETCH = 100;

store.dispatch(fetchPosts(API_URL, MAX_PAGES_TO_FETCH));

export default App;
