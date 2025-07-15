// ModelVisualizer component: visualizes a selected business model
import React from 'react';
import { useParams } from 'react-router-dom';
import businessModels from '../data/businessModels';

function ModelVisualizer() {
  // Get the modelId from the route
  const { modelId } = useParams();
  // Find the model data
  const model = businessModels.find((m) => m.id === modelId);

  if (!model) {
    return <div>Model not found.</div>;
  }

  return (
    <div>
      <h2>{model.name}</h2>
      {/* TODO: Visualize the model (diagram, table, etc.) */}
      <p>{model.description}</p>
      {/* TODO: Add more details and ServiceNow/CMDB context */}
    </div>
  );
}

export default ModelVisualizer; 