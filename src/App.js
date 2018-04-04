import React, { Component } from 'react';
import './App.css';
import './index.css'
import TopNav from './components/TopNav';
import MainRoutes from './components/MainRoutes'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import RootReducer from './reducers/root';
import thunkMiddleware from 'redux-thunk';
import { fetchPosts } from './actions/posts.actions';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import Footer from './components/Footer';
import { API_URL, MAX_POSTS_TO_FETCH } from './constants/index'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="font-sans antialiased">
            <TopNav />
            <div className="main-content">
              <MainRoutes />
              <Footer />
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
  router: routerReducer,
  form: formReducer
}),
  applyMiddleware(thunkMiddleware, routerMiddlewareWithHistory)
);

store.dispatch(fetchPosts(API_URL, MAX_POSTS_TO_FETCH));

export default App;
