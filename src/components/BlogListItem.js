import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import moment from 'moment';
import styled  from 'styled-components';

const Date = styled.span`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  color: red;
`;
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
            <div className={`post post-${index} bg-white rounded p-8 shadow mb-8`} key={index}>
              <Link className="text-blue no-underline text-xl" to={`/blog/post/${post.slug}`} onClick={props.onClick}><h2 className="mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2></Link>
              {/* <p className={`${trimmed(post.content.rendered).length >= 25 ? 'trimmed-excerpt' : ''} leading-normal text-grey-darkest text-lg`} dangerouslySetInnerHTML={{ __html: trimmed(striptags(post.content.rendered, ['a', 'strong', 'code'])).join(' ') }}></p> */}
              <Date>{moment(post.date).format("MMM DD, YYYY")}</Date>
            </div>
          )
        }
        return null;
      })}
    </div>
  )
}
