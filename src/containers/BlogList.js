import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Pagination } from 'react-bootstrap';
import BlogListItem from '../components/BlogListItem';
import uuid from 'node-uuid';

const PER_PAGE = 10;

class BlogList extends Component {

  handlePageChange = (evt) => {
    const page = Number(evt.target.innerText);
    this.props.dispatch(push(`/blog/?page=${page}`));
  }

  paginationItems = () => {
    let active = this.props.page;
    let items = [];

    for (let number = 1; number <= this.props.posts.length / PER_PAGE; number++) {
      items.push(
        <Pagination.Item key={uuid.v4()} active={number === active} activeLabel="" onClick={this.handlePageChange}>{number}</Pagination.Item>
      );
    }

    return items;
  }

  render() {
    return (
    this.props.isLoading ? 'loading...' : 
      <div>
        <Pagination bsSize="small">{this.paginationItems()}</Pagination>
        <BlogListItem posts={this.props.posts} onClick={this.props.onClick} page={this.props.page} perPage={PER_PAGE} />    
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const params = new URLSearchParams(state.router.location.search);
  const page = params.get('page');
  const { data: { posts, postsLoading: isLoading } } = state;

  return {
    posts,
    isLoading,
    page: Number(page) || 1
  }
}

export default connect(mapStateToProps)(BlogList);