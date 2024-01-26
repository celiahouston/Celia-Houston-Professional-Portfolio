// import React from 'react';
import React from 'react/jsx-runtime'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom'; 
import Header from './Header';
import HomePage from './HomePage.js';
import ProjectGallery from './ProjectGallery';
import ContactPage from './ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
