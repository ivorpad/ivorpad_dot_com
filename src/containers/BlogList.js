import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Pagination } from 'react-bootstrap';
import BlogListItem from '../components/BlogListItem';
import uuid from 'node-uuid';
import { PER_PAGE } from '../constants/index';


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
        <Pagination.Item key={uuid.v4()} active={number === active} activeLabel={``} className="mx-3" onClick={this.handlePageChange}> <span className="pagination-item bg-grey-darker font-bold text-sm text-white block py-2 px-3 shadow-md rounded">{number}</span> </Pagination.Item>
      );
    }

    return items;
  }

  render() {
    return (
    this.props.isLoading ? 'loading...' : 
        <main className="blog-container w-1/2">
          <h2 className="py-8 text-blue-darkest ml-8 inline-block align-middle">Journal</h2> <span className="align-middle text-sm text-grey-dark font-serif italic"> — Code, thoughts & more...</span>
          <BlogListItem posts={this.props.posts} onClick={this.props.onClick} page={this.props.page} perPage={PER_PAGE} />
          <Pagination className="pagination list-reset flex justify-center mt-8">{this.paginationItems()}</Pagination>
      </main>
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