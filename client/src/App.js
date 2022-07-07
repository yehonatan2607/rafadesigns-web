import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/';
import Error404 from './pages/404/Error404';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route apth="/" component={LandingPage} exact />
      </Routes>
    </Router>
  );
}

export default App;
