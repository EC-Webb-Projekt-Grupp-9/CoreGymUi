import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header';
import Index from './components/Pages/Index'
import Booking from './components/Pages/Booking'
import InfoSection from './components/InfoSection/InfoSection';
import ContactSection from './components/Contact/ContactSection';


function App() {
    return (

        <main>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/booking" element={<Booking />} />          
            </Routes>
        </main>

            
    );
}

export default App;