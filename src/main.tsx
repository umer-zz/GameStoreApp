import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './pages/Store.tsx';
import Genre from './pages/Genres.tsx';
import Browse from './pages/Browse.tsx';
import GamePage from './pages/GamePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Store />,
        index: true
      },

      {
        element: <Genre />,
        path: 'Genre'
      },

      {
        element: <Browse />,
        path: 'browse',
      },
      {
        element: <GamePage />,
        path: 'game/:gameId'
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
