// redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  token: string | null;
  name: string | null;
  email: string | null;
  avatar: string | null;
  isLoggedIn: boolean; 
}

const DEFAULT_AVATAR = "/assets/download.jpeg"; // You can place this image in `public/assets/`

const initialState: UserState = {
  token: null,
  name: null,
  email: null,
  avatar: DEFAULT_AVATAR,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        token: string;
        name: string;
        email: string;
        avatar?: string;  // <-- made optional
      }>
    ) => {
      const { token, name, email, avatar } = action.payload;
      state.token = token;
      state.name = name;
      state.email = email;
      state.avatar = avatar || DEFAULT_AVATAR;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.token = null;
      state.name = null;
      state.email = null;
      state.avatar = DEFAULT_AVATAR;
      state.isLoggedIn = false;
      localStorage.removeItem('token'); 
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
