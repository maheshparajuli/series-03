

import '../PostList.css';

import React from 'react';
import { Inbox } from 'lucide-react';
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
          <Inbox className="empty-icon" size={48} />
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