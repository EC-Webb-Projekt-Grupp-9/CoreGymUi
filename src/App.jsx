
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Header from "./components/Header/Header";
import Index from "./components/Pages/Index";
import Booking from "./components/Pages/Booking";
import Register from './components/Pages/Register';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/booking" element={<Booking />} />
         <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
