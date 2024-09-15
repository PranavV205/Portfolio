import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

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

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
        <Route path='' element={<Landing/>} />
        <Route path='portfolio' element={<Portfolio/>} />
        <Route path='memegen' element={<Memegen/>}/>
      </>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>  
  </StrictMode>,
)
