import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../api/reddit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ category, after, limit = 5 }) => {
    const response = await getPosts(category, after);
    const limitedPosts = response.data.data.children.slice(0, limit);
    return { posts: limitedPosts, after: response.data.data.after };
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
    after: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Append new posts to the existing posts array
        state.posts = [...state.posts, ...action.payload.posts];
        state.after = action.payload.after;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
