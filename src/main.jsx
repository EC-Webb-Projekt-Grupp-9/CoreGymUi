import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
         <App />
        </BrowserRouter>        
    </React.StrictMode>
)