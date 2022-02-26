import React, { useState, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Post from './components/Post';


const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/post" element={<Post />} />

          <Route path='/feedback' component={() => {
            window.location.href = 'https://google.com';
            return null;
          }}/>
          <Route path="/*" element={<Error/>} />
      </Routes>
    </Router>
  );
};


export default App;
