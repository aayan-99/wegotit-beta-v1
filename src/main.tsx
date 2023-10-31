import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'
import MouseContextProvider from './context/mouseContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </Router>
  </React.StrictMode>,
)
