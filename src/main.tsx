import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 👑 CRITICAL FIX: Wrap all route components in BrowserRouter */}
    <BrowserRouter>
        <Routes>
            {/* Main portfolio routes */}
            <Route path="/" element={<App />} /> 
            
            {/* Legal Routes - Using lowercase paths for URL convention */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> 
            <Route path="/terms-of-use" element={<TermsOfUsePage />} /> 
            
            {/* TODO: Add a catch-all 404 route here */}
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)