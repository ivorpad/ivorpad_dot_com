import React, { Component } from 'react';
import './App.css';
import './index.css'
import TopNav from './components/TopNav';
import axios from 'axios';
import Blog from './components/Blog'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePost from './components/SinglePost';
import About from './components/About';
import Contact from './components/Contact';
import BlogList from './containers/BlogList';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import RootReducer from './reducers/root';
import thunkMiddleware from 'redux-thunk';
import { fetchPosts } from './actions/posts.actions';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';


class App extends Component {
  
  state = {
    data: [],
  }
  
  getData = async (url) => await axios.get(url);
  
  componentDidMount() {
    const url = '//localhost/wordpress/wp-json/wp/v2/posts?per_page=100';
    this.getData(url)
    .then(response =>
      this.setState( prevState => {
        return {
          data: prevState.data.concat(response.data)
        };
      })
    )
    .catch(err => console.log(`${err.message}: Please connect to the internet.`));
  }
  
  handleSinglePost = (slug) => {
    return this.state.data.filter(value => value.slug === slug)
  }
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App helvetica">
            <TopNav />
            <div className="mw9 center ph3-ns">
            
              <div className="cf ph2-ns">
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/blog/post/:slug" render={({ match }) => (
                    <SinglePost data={this.handleSinglePost(match.params.slug)[0]} />
                  )} />
                  <Route path="/blog" render={props => (
                    <Blog data={this.state.data} {...props} />
                  )} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </div>
            </div>
            <BlogList />
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

const API_URL = `//localhost/wordpress/wp-json/wp/v2/posts?per_page=100`

store.dispatch(fetchPosts(API_URL));

export default App;
