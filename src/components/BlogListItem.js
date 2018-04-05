import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import moment from 'moment';

export default (props) => {
  
  const current_page = props.page;
  const start_offset = (current_page - 1) * props.perPage;
  const trimmed = (str) => str.split(' ').slice(0, 25);
  let start_count = 0;
  
  return (
    <div className="post-container">
      {props.posts.map((post, index) => {
        if (index >= start_offset && start_count < props.perPage) {
          start_count++;
          return (
            <Link key={index} className="block no-underline" to={`/blog/post/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
              {/* bg-white rounded p-8 shadow mb-8 */}
              <div className={`post post-${index} bg-white p-8 border-b border-grey-lighter`}>
                <h2 className="font-normal text-grey-darkest no-underline text-xl mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
                <span className="text-xs uppercase font-bold text-grey-dark">{moment(post.date).format("MMM DD, YYYY")}</span>
              </div>
            </Link>
          )
        }
        return null;
      })}
    </div>
  )
}
