import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderCheck from './pages/OrderCheck';
import OrderChoice from './pages/OrderChoice';
import OrderComplete from './pages/OrderComplete';
import MembershipSignUp from './pages/MembershipSignUp';
import MembershipLogin from './pages/MembershipLogin';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import Admin from './pages/Admin';
import PasswordProtectedPage from './pages/PasswordProtectedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Menu/:takeOutId', element: <Menu /> },

      { path: 'Menu/OrderCheck/:takeOutId', element: <OrderCheck /> },
      {
        path: 'Menu/OrderCheck/OrderChoice/:takeOutId',
        element: <OrderChoice />,
      },
      {
        path: 'Menu/OrderChoice/OrderComplete/:takeOutId',
        element: <OrderComplete />,
      },
      {
        path: 'Menu/OrderChoice/MembershipSignUp/:takeOutId',
        element: <MembershipSignUp />,
      },
      {
        path: 'Menu/OrderChoice/MembershipLogin/:takeOutId',
        element: <MembershipLogin />,
      },
      {
        path: 'Admin/',
        element: <Admin />,
      },
      {
        path: 'PasswordProtectedPage/',
        element: <PasswordProtectedPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </React.StrictMode>{' '}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
