import React, { Component } from 'react'

export default class SinglePost extends Component {


  render() {

    const { title = '', content = '' } = this.props.data !== undefined && this.props.data

    return (
      <div>
        <h1>{title.rendered}</h1>
        <p>{content.rendered}</p>
      </div>
    )
  }
}
