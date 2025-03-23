import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {HeadProvider} from 'react-head'
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadProvider>
      <CssBaseline />
    <App />
    </HeadProvider>
  </StrictMode>,
)
