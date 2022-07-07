import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/';

const App = () => {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
/*<Routes>
        <Route apth="/" component={LandingPage} exact />
      </Routes>*/