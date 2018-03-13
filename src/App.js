import React, { Component } from 'react';
import './App.css';
import './index.css'
import TopNav from './TopNav';
import axios from 'axios';
import Blog from './Blog'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SinglePost from './SinglePost'


class App extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const appUrl = '//tfsnippets.ivorpad.com/wp-json/wp/v2/themeforest_snippets';

    axios.get(appUrl)
      .then(res => this.setState((prevState) => {
          return {
            data: prevState.data.concat(res.data)
          }
        }))
      .catch(err => console.log(`${err.message}: Please connect to the internet.`) ) 

  }

  handleSinglePost = (slug) => {
    return this.state.data.filter(value => value.slug === slug)
  }

  render() {
    return (
        
        <Router>
          <div className="App helvetica">
            <TopNav />
            <Switch>
              <Route exact path="/" component={HomePage} />
            <Route path="/blog/:slug" render={({ match }) => (
              <SinglePost data={this.handleSinglePost(match.params.slug)[0]} />
              )} />
              <Route path="/blog" render={props => (
                <Blog data={this.state.data} {...props} />
              )}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
