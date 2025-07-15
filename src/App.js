// Main App component. Sets up routing and navigation.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModelList from './components/ModelList';
import ModelVisualizer from './components/ModelVisualizer';
import Home from './components/Home';
import './styles/App.css';

function App() {
  return (
    <Router>
      {/* Navbar for navigation */}
      <Navbar />
      {/* TODO: Add Routes for Home, ModelList, and ModelVisualizer */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<ModelList />} />
        <Route path="/visualizer" element={<ModelVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App; 