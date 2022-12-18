import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/Mynav';
import './Styles/MyNav.css';
import MyFooter from './components/MyFooter';
import MyHome from './components/MyHome';
import Alimentazione from './components/Alimentazione';
import Pt from './components/Pt';
import Subscription from './components/Subscription';
import Abbonamenti from './components/Abbonamenti';
import Profile from './components/Profile';
import SignedUp from './components/SignedUp';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from './redux/actions';
import { useState } from 'react';
import { setUseProxies } from 'immer';

function App() {
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <MyNav/>
      <BrowserRouter>
        <Routes>
        <Route path="/subscription" element={<Subscription />} /> 
        <Route path="/" element={<MyHome />} />
        <Route path="/ali" element={<Alimentazione/>} />
        <Route path="/pt" element={<Pt/>} />
        <Route path="/abbonamenti" element={<Abbonamenti/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signedup" element={<SignedUp/>} />
        
        </Routes>
      </BrowserRouter>
      
      <MyFooter/>
    </div>
  );
}

export default App;
