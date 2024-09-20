import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import './index.css'
import { GlobalStates } from './ContextApi/Contextapi.jsx';
// import { GlobalStates } from './ContextApi/Contextapi.jsx';

createRoot(document.getElementById('root')).render(
  // Contextapi.jsx
  <StrictMode>
    <GlobalStates>
    <App />
    </GlobalStates>
  </StrictMode>,
)
