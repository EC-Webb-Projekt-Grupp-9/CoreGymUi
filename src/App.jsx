
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Header from "./components/Header/Header";
import Index from "./components/Pages/Index";
import Booking from "./components/Pages/Booking";
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Admin from "./components/Pages/Admin";
import AccountInformation from "./components/Pages/AccountInformation";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/booking" element={<Booking />} />
         <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/accountinfo" element={<AccountInformation />} />
      </Routes>
    </main>
  );
}

export default App;
