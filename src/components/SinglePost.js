import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';

export default class SinglePost extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { title = '', content = '' } = this.props.data !== undefined && this.props.data;
    const { rendered: postTitle } = title;
    const { rendered: postContent } = content;
    return (
      <div className="container px-4 pt-8 pb-8 mb-8 mx-auto">

        {/* <Link to="/blog" className="hover:text-grey-light hover:bg-grey-darker bg-grey-dark shadow-md pt-2 pb-2 pl-4 pr-4 rounded-full no-underline text-white text-xs uppercase font-bold mb-4">&larr; Go Back</Link> */}
        <div className="content--container">
          <h1 className="mt-8 pb-4" dangerouslySetInnerHTML={{ __html: postTitle }}></h1>
          <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
        </div>
      </div>
    )
  }
}
