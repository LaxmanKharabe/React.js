import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import '../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.css';
import UseParamsHookDemo from './components/useParams/creating-and-passing-parameters/use-params-hook';
import FakeStoreApiForUseParamApi from './components/useParams/ex-using-fakestore-api/fakestore-api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FakeStoreApiForUseParamApi />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
