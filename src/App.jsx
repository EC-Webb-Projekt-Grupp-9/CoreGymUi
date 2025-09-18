import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Index from './components/Pages/Index';
import InfoSection from './components/InfoSection/InfoSection';
import ContactSection from './components/Contact/ContactSection';

function App() {
    return (
        <>
            <Header />
            <Index />
            <ContactSection />
            <InfoSection />
        </>
    );
}

export default App;