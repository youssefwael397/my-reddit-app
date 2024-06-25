import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: ['hot', 'new', 'rising'],
    selectedCategory: 'hot',
  },
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
