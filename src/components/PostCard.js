import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div
      className="post-card"
      onClick={() => window.open(post.data.url, '_blank')}
    >
      <h3>{post.data.title}</h3>
      <p>{post.data.selftext}</p>
    </div>
  );
};

export default PostCard;
