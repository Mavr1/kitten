import { configureStore } from '@reduxjs/toolkit';

import kittensSlice from './kittensSlice';

export const store = configureStore({
  reducer: {
    [kittensSlice.name]: kittensSlice.reducer,
  },
});
