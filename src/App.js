import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/greeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello, ReactOnRails</div>,
  },
  {
    path: '/greeting',
    element: <Greeting />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
