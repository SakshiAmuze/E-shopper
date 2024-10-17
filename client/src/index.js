import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.js";
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';

import {
  RouterProvider
} from "react-router-dom";
import customRouter from "./project-router.js";
import { Provider } from 'react-redux'
import store from './Redux/eshopstore.js';


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <Provider store={store}>
    <CookiesProvider>
      <RouterProvider router={customRouter}></RouterProvider>
    </CookiesProvider>
  </Provider>

);