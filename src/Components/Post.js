
import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <small>{post.date}</small>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
