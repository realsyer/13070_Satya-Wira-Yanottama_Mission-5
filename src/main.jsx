import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>,
)
