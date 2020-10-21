import React, { useEffect } from 'react';
import './App.less';
import Router from './components/Router';
import { getUserToken } from './components/login/authUtils';
import axios from 'axios';
import axiosInstance from './components/login/axios';
import { useDispatch } from 'react-redux';
import { login } from './modules/user';

axios.defaults.headers.common['Authorization'] = `Token ${getUserToken()}`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance.get(`user/me`).then(({ data }) => dispatch(login(data)));
  }, []);
  useEffect(() => {
    axiosInstance.get(`shop/my`).then(({ data }) => dispatch(login(data)));
  }, []);

  return <Router />;
}

export default App;
