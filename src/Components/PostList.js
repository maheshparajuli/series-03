

import '../PostList.css';

import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h2 className="post-list-title">Blog Posts</h2>
        <span className="post-count">{posts.length} posts</span>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-6l-2 3h-4l-2-3H2" />
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>
          </div>
          <p className="empty-text">No posts yet!</p>
          <p className="empty-subtext">Be the first to share your thoughts</p>
        </div>
      ) : (
        <div className="posts-grid">
          {sortedPosts.map((post) => (
            <div key={post.id} className="post-card-wrapper">
              <Post post={post} />
            </div>
          ))}
        </div>
      )}

      {posts.length > 0 && (
        <div className="list-footer">
          <p className="footer-text">
            Showing {posts.length} post{posts.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
}

export default PostList;