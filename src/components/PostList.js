import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/slices/postSlice';
import PostCard from './PostCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, after } = useSelector((state) => state.posts);
  const { selectedCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchPosts({ category: selectedCategory }));
    }
  }, [selectedCategory, dispatch]);

  const fetchMoreData = () => {
    if (selectedCategory && after) {
      dispatch(fetchPosts({ category: selectedCategory, after }));
    }
  };

  return (
    <InfiniteScroll
      dataLength={posts.length} // This is important field to render the next data
      next={fetchMoreData}
      hasMore={after !== null}
      loader={<h4 className='text-center'>Loading more posts...</h4>}
      endMessage={<p className="end-message">That's All Set!</p>}
    >
      {posts.map((post) => (
        <PostCard key={post.data.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
