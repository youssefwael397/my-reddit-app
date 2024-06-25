import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../store/slices/categorySlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => dispatch(selectCategory(category))}
          style={{
            fontWeight: category === selectedCategory ? 'bold' : 'normal',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
