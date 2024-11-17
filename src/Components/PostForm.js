
import '../PostForm.css'; 

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    setCharCount(newContent.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addPost(title, content);
      setTitle('');
      setContent('');
      setCharCount(0);
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleSubmit} className="post-form">
        <div className="post-form-header">
          <h2 className="text-2xl font-bold text-gray-900">Create a New Post</h2>
          <p className="text-gray-600">Share your thoughts with the community</p>
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="form-input"
            placeholder="Enter your post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={3}
            maxLength={100}
            disabled={isSubmitting}
          />
          <span className="input-info">
            {title.length}/100 characters
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-textarea"
            placeholder="Write your post content here..."
            value={content}
            onChange={handleContentChange}
            required
            minLength={10}
            rows={6}
            disabled={isSubmitting}
          />
          <span className="input-info">
            {charCount} characters (minimum 10)
          </span>
        </div>

        <div className="form-footer">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Submitting...
              </>
            ) : (
              'Create Post'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;