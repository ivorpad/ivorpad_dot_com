import React, { Component } from 'react';
import '../App.css';
import BlogList from '../containers/BlogList';


class Blog extends Component {

  render() {
    return (
      <div className="container mx-auto px-4 flex justify-center">
        <BlogList />
      </div>
    )
  }
}

export default Blog;