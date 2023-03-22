import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//인증필요
export const accessClient = axios.create({
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  }
});
//인증 불필요 클라이언트
export const client = axios.create({
  headers:{
    "Content-Type": "application/json",
  }
});