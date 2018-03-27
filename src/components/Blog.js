import React, { Component } from 'react';
import '../App.css';
import BlogList from '../containers/BlogList';


class Blog extends Component {

  render() {
    return (
      <div>
        <BlogList />
      </div>
    )
  }
}

export default Blog;