import React from 'react';

// Home page component: introduces the app and provides context
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the CSDM React App</h1>
      <p>
        This minimal app helps you learn and visualize ServiceNow CSDM (Common Service Data Model) business and service models.
        Explore business models, visualize their relationships, and see how they connect to ServiceNow/CMDB concepts.
      </p>
      <p>
        Use the navigation bar to browse business models or visualize relationships.
      </p>
    </div>
  );
}

export default Home; 