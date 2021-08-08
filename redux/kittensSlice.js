import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export default createSlice({
  name: 'kittens',
  initialState,
  reducers: {
    setIsLoadingTrue: (state) => {
      state.isLoading = true;
    },
    setIsLoadingFalse: (state) => {
      state.isLoading = false;
    },
    getKittensSuccess: (state, { payload }) => {
      state.data = payload;
      state.error = null;
    },
    getKittensError: (state, { payload }) => {
      state.error = payload;
    },
  },
});
