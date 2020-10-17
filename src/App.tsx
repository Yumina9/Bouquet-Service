import React from 'react';
import './App.less';
import Router from './components/Router';
import { getUserToken } from './components/login/authUtils';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Token ${getUserToken()}`;
function App() {
  return <Router />;
}

export default App;
