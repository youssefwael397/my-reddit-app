import React from 'react';
import CategoryList from './components/CategoryList';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="app">
      <CategoryList />
      <PostList />
    </div>
  );
};

export default App;
