import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Body from './components/Body';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className='flex flex-row justify-between py-10 px-10 bg-color2'>
      <Body />
      <Map />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
