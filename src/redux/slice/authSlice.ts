import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
