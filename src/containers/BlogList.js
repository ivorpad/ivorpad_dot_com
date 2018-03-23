import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Table, Pagination, PaginationItem } from 'react-bootstrap';
import BlogListItem from '../components/BlogListItem';

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
        <Pagination.Item active={number === active} activeLabel={false} onClick={this.handlePageChange}>{number}</Pagination.Item>
      );
    }

    return items;
  }

  render() {
    return (
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

  return {
    posts: state.data.posts,
    isLoading: state.data.postsLoading,
    page: Number(page) || 1
  }
}

export default connect(mapStateToProps)(BlogList);