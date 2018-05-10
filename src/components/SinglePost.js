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

  singlePostContent() {
    const {
      title = '',
      content = '',
      tag_names = ''
    } = this.props.data !== undefined && this.props.data;
    const { rendered: postTitle } = title;
    const { rendered: postContent } = content;

    if(this.props.isLoading) return( <div> <p>is loading...</p> </div> );
    
    return (
      <div className="content--container bg-white">
        <h1 className="mt-8 pb-4" dangerouslySetInnerHTML={{ __html: postTitle }}></h1>
        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
      </div>
    )
  }

  render() {
   return(
     <div className="container px-4 pt-8 pb-8 mb-8 mx-auto">
       {this.singlePostContent()}
     </div>
   )
  }
}
