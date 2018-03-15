import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Pagination from './Pagination';
import _ from 'lodash';

class Blog extends Component {

  
  state = {
    items: [],
    pageOfItems: []
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
  }

  componentWillMount = () => {
    this.setState({ items: this.props.data })
  }
  

  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.data })
  }

  render() {
    return (

      <div>
       
        {this.state.pageOfItems.map((post, i) => (
          <div className={`post-${i}`} key={i}>
            <Link to={`/blog/post/${post.slug}`} onClick={this.props.onClick}><h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2></Link>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
          </div>
        ))}

        <Pagination items={this.state.items} onChangePage={this.onChangePage} />
      </div>
    )
  }
}

export default Blog;