import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Post from './Post';


function PostList({ posts }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const postVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="post-list"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h2>Blog Posts</h2>
      <AnimatePresence>
        {posts.length === 0 ? (
          <motion.p
            key="no-posts"
            variants={postVariants}
            className="no-posts"
          >
            No posts yet!
          </motion.p>
        ) : (
          posts.map((post) => (
            <motion.div
              key={post.id}
              variants={postVariants}
            >
              <Post post={post} />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default PostList;