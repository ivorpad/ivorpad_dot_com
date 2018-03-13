import React from 'react';
import './App.css';
import slugify from 'slugify';

const Blog = (props) => {

  return (

    <div> 
      {props.data.map((post, i) => (
        <div className={`post-${i}`} key={i}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          <small>slug: {slugify(post.title.rendered, { lower: true })}</small>
          <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
        </div>
      ))}


      <h1>This is the about page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores rerum nihil porro. Saepe earum delectus porro minus sequi, iste debitis officia corporis nesciunt quisquam quod doloribus velit error aliquid.</p>
      <div className="userProfile">
        <h1>User Profile</h1>
      </div>
    </div>

  )
}

export default Blog;