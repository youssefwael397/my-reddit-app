import { combineReducers } from 'redux';
import categoryReducer from './slices/categorySlice';
import postReducer from './slices/postSlice';

const rootReducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer,
});

export default rootReducer;
