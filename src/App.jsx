import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Index from './components/Pages/Index';
import InfoSection from './components/InfoSection/InfoSection';

function App() {
    return (
        <>
            <Header />
            <Index />
            <InfoSection />
        </>
    );
}

export default App;