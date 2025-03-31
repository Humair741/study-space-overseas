// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Import the CSS reset first
import './App.css'    // Then import App styles
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)