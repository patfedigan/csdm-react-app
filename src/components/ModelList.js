// ModelList component: displays a list of business models
import React from 'react';
import { Link } from 'react-router-dom';
import businessModels from '../data/businessModels';

function ModelList() {
  return (
    <div>
      <h2>Business Models</h2>
      {/* TODO: Style this list */}
      <ul>
        {businessModels.map((model) => (
          <li key={model.id}>
            {/* Link to the visualizer for this model */}
            <Link to={`/visualize/${model.id}`}>{model.name}</Link>
            {/* TODO: Display a short description */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModelList; 