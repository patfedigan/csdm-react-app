// ModelList component: displays a list of business models
import React from 'react';
// Import the business models data array
import businessModels from '../data/businessModels';
// Import useNavigate from react-router-dom at the top
import { useNavigate } from 'react-router-dom';

// Functional component to display the list of business models
function ModelList() {
  // Inside your ModelList function, create a navigate function
  const navigate = useNavigate();

  return (
    <div className="model-list-container">
      <h2>Business Models</h2>
      {/* Render a list item for each business model */}
      <ul>
        {businessModels.map((model) => (
          // Use model.id as the unique key for each list item
          <li key={model.id}>
            <button
              onClick={() => {
                // This will change the URL to /visualizer/{model.id}
                // and render the ModelVisualizer component for that model
                navigate(`/visualizer/${model.id}`);
              }}
            >
              {/* Display the model's name */}
              <h3>{model.name}</h3>
              {/* Display the model's description */}
              <p>{model.description}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the component so it can be used in App.js
export default ModelList; 