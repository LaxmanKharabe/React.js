import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import UseParamsHookDemo from './components/useParams/creating-and-passing-parameters/use-params-hook';
import FakeStoreApiForUseParamApi from './components/useParams/ex-using-fakestore-api/fakestore-api';
import { RouterOutletDemo } from './components/router-outlet-and-nested-route/router-outlet-demo';
import RoutingStarter from './components/useNavigate/routing-starter';
import { CookieHome } from './components/react-cookies-library/home';
import { CookiesRoutes } from './components/react-cookies-library/all-routes-cookies';
import { VideoIndex } from './components/react-cookies-library/autentication/VideoChannel-Index';
import ParentComponent from './components/use-context/ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
