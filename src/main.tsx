import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'
import MouseContextProvider from './context/mouseContext.tsx';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <ScrollToTop />
        <MouseContextProvider>
          <App />
        </MouseContextProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
)
