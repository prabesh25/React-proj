import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {BrouserRouter as Router, Routes, Route} from 'react-router-dom';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter> ,
)
