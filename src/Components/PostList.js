import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  return (
    <div className="post-list">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p className="no-posts">No posts yet!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;