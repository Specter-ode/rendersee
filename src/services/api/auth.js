import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;
console.log('REACT_APP_BACKEND_URL: ', REACT_APP_BACKEND_URL);
const instance = axios.create({
  baseURL: REACT_APP_BACKEND_URL || 'http://localhost:4000/',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const result = await instance.post('api/users/register', data);
  return result.data;
};

export const login = async data => {
  const result = await instance.post('api/users/login', data);
  setToken(result.data.accessToken);
  return result.data;
};

export const logout = async data => {
  const result = await instance.post('api/users/logout', data);
  setToken('');
  return result.data;
};
