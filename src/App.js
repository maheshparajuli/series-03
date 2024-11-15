
import React, { useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import '../PostForm.css';
import '../PostList.css';


function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = {
      id: uuidv4(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <h1>Simple Blog App</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
