
import React from 'react';
import Post from './Post';
import '../PostList.css';

function PostList({ posts }) {
  return (
    <div className="post-list">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p className="no-posts">No posts yet!</p>
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;