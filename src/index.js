import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Entertainment from './pages/Entertainment';
import Dashboard from './pages/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/entertainment",
    element: (
      <Entertainment />
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
