import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJPSLeyOvqyASHVoIrc1XTECoFbvlppW8",
  authDomain: "camadita-31140.firebaseapp.com",
  projectId: "camadita-31140",
  storageBucket: "camadita-31140.appspot.com",
  messagingSenderId: "163827896234",
  appId: "1:163827896234:web:9d5552fc004e4ae398a5d3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
