import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import './index.css'
import { GlobalStates } from './Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStates>
    <App />
    </GlobalStates>
  </StrictMode>,
)
