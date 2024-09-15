import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, createHashRouter, HashRouter } from 'react-router-dom'

import Portfolio from './components/portfolio/Portfolio.jsx';
import Landing from './components/landing/Landing.jsx';
import Memegen from './components/projects/MemeGen/Memegen.jsx';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif'
    ].join(','),
  },
})

const router = createHashRouter([

  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/profile",
    element: <Portfolio />,
  },
  {
    path: "/projects/memegen",
    element: <Memegen />,
  },
])


createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>  
)
