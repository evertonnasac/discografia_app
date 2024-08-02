import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { ListDisk } from './pages/list_disk/List_disks.tsx';
import { AreaDisk } from './pages/area_disk/AreaDisk.tsx';

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
        path: "discos",
        element: <ListDisk />,
      },
      {
        path: "faixas",
        element: <ListDisk />,
      },
      {
        path: "disco/:id/:name",
        element: <AreaDisk />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
