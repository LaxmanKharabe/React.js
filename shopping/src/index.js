import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/Loging/loging';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixIndex } from './components/netflix/netflix-index';
import { OnewayBinding } from './components/Oneway-binding/one-waybinding';
import { DataTypesBinding } from './components/Oneway-binding/DatatypesBinding';
import { ComplexDataBinding } from './components/Oneway-binding/complexData';
import { ComplexData } from './components/Oneway-binding/complexData2';
import { UseState } from './components/useState()/UseStateHook';
import { TwowayBinding } from './components/Twoway-binding/TwowayBinding';
import { ExampleSecond } from './components/Twoway-binding/exampleSecond';
import { Flipkart } from './components/Flipkart/flipkart';
import { FlipkartPracExam } from './components/Flipkart/FlipkartpracExam';
import { UseEffecHook } from './components/useEffectHook/UseEffectHook';
import { UseEffectExample } from './components/useEffectHook/useEffectExample';
import { FackStore } from './components/useEffectHook/fakestoreapi';
import { Shopping } from './components/useEffectHook/shopping';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FackStore />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
