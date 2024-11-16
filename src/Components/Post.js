
import React, { useState } from 'react';

const Post = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="post-card"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="post-header">
        <h3>{post.title}</h3>
        <span className="post-date">{post.date}</span>
      </div>
      {isExpanded && (
        <div className="post-content">
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
};

export default Post;