import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import NotFoundPage from './pages/NotFoundPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap all route components in BrowserRouter */}
    <BrowserRouter>
      <Routes>
        {/* Main portfolio routes */}
        <Route path="/" element={<App />} /> 
        
        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> 
        <Route path="/terms-of-use" element={<TermsOfUsePage />} /> 
        
        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)