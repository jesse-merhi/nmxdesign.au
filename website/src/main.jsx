import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{path:"",element:<Dashboard/>},
    {path:"about",element:<div>about</div>},
    {path:"designs",element:<div>designs</div>},
    {path:"blog",element:<div>blog</div>},
    {path:"guides",element:<div>guides</div>},
    {path:"contact",element:<div>contact</div>}
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
