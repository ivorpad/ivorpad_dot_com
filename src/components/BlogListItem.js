import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  
  const current_page = props.page;
  const start_offset = (current_page - 1) * props.perPage;
  let start_count = 0;
  
  return (
    <div>
      {props.posts.map((post, index) => {
        if (index >= start_offset && start_count < props.perPage) {
          start_count++;
          return (
            <div className={`post-${index}`} key={index}>
              <Link to={`/blog/post/${post.slug}`} onClick={props.onClick}><h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2></Link>
              <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
            </div>
          )
        }
        return null;
      })}
    </div>
  )
}
