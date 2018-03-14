import React, { Component } from 'react'

export default class SinglePost extends Component {
  render() {
    const { title = '', content = '' } = this.props.data !== undefined && this.props.data;
    const { rendered: postTitle } = title;
    const { rendered: postContent } = content;
    return (
      <div>
        <h1>{postTitle}</h1>
        <p>{postContent}</p>
      </div>
    )
  }
}
