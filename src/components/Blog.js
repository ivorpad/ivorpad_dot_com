import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
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