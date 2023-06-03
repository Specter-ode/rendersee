import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api/auth';
import { toast } from 'react-toastify';

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  try {
    const result = await api.register(data);
    console.log('register result: ', result);
    toast.success('Register success. Check email to verify your account!');
    return result;
  } catch (error) {
    toast.error(`Sorry, register failed. Try again.`);
    return rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  console.log('login: ', login);
  try {
    const result = await api.login(data);
    toast.success('Login success.');
    return result;
  } catch (error) {
    toast.error(`Sorry, login failed. Check email and password. Try again.`);
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (data, { rejectWithValue }) => {
  try {
    const result = await api.logout(data);
    return result;
  } catch (error) {
    toast.error(`Sorry, logout failed. Try again.`);
    return rejectWithValue(error.message);
  }
});
