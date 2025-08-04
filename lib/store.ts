// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Types for usage in app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
