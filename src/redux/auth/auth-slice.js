import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    socialAuth: (store, { payload }) => {
      store.accessToken = payload.accessToken;
      store.refreshToken = payload.refreshToken;
      store.user = { ...payload.user };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, store => {
        store.isLoading = false;
        store.error = null;
      })

      .addCase(login.fulfilled, (store, { payload }) => {
        store.user = { ...payload.user };
        store.accessToken = payload.accessToken;
        store.refreshToken = payload.refreshToken;
        store.isLoading = false;
        store.error = null;
      })

      .addCase(logout.fulfilled, () => ({ ...initialState }))
      .addMatcher(handleError, (store, { payload }) => {
        store.isLoading = false;
        if (payload) {
          store.error = payload.message;
        } else {
          store.error = 'No connection to database';
        }
      })
      .addMatcher(handleLoad, store => {
        store.error = null;
        store.isLoading = true;
      });
  },
});

function handleError(action) {
  return action.type.endsWith('rejected');
}
function handleLoad(action) {
  return action.type.endsWith('pending');
}

export const { socialAuth } = authSlice.actions;

export default authSlice.reducer;
