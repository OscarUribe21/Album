import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MessiPage from './pages/MessiPage.jsx'
import NeymarPage from './pages/NeymarPage.jsx'
import CR7Page from './pages/CR7Page.jsx'
import SergioPage from './pages/SergioPage.jsx'
import TeoPage from './pages/TeoPage.jsx'
import BaccaPage from './pages/BaccaPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/messi" element={<MessiPage />} />
        <Route path="/neymar" element={<NeymarPage />} />
        <Route path="/cr7" element={<CR7Page />} />
        <Route path="/sergio" element={<SergioPage />} />
        <Route path="/teo" element={<TeoPage />} />
        <Route path="/bacca" element={<BaccaPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
