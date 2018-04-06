import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import HomePage from './HomePage';
import Blog from './Blog';
import SinglePost from './SinglePost';
import { connect } from 'react-redux'


class MainRoutes extends Component {

  handleSinglePost = (slug) => {
    return this.props.posts.find(value => value.slug === slug)
  }
  
  render() {
    return (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog/post/:slug" render={({ match }) => (
            <SinglePost data={this.handleSinglePost(match.params.slug)} />
          )} />
          <Route path="/blog" render={props => (
            <Blog {...props} />
          )} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    posts: data.posts
  }
}

export default withRouter(connect(mapStateToProps)(MainRoutes));