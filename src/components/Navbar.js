// Navbar component for app navigation
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* TODO: Style the navbar */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/models">Business Models</Link></li>
        <li><Link to="/visualizer">Visualizer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 