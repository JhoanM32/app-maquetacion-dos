import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './router/router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={createBrowserRouter(routes)}/>
  </StrictMode>,
)
