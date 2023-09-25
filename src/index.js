import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './test.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
const test = ReactDOM.createRoot(document.getElementById('test'));
// const test2 = ReactDOM.createRoot(document.getElementById('test2'));
// let hello = ReactDOM.createRoot(document.getElementById('test3'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
test.render(
  <Test></Test>
)
// test2.render(
//   <Test2 />
// )
// hello.render(
//   <Test3 />
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
