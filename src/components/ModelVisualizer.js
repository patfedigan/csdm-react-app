// ModelVisualizer component: visualizes a selected business model
import React from 'react';
import { useParams } from 'react-router-dom';
import businessModels from '../data/businessModels';
import { fetchCMDBItems } from '../api/servicenowApiTemplate';

function ModelVisualizer() {
  // Get the modelId from the route
  const { modelId } = useParams();
  // Find the model data
  const model = businessModels.find((m) => m.id === modelId);
  const [cmdbData, setCmdbData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  // Add error state
  const [error, setError] = React.useState(null);

  // Memoize the load function to prevent unnecessary re-renders
  const loadCMDBData = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchCMDBItems();
      if (result.success) {
        setCmdbData(result.data);
      } else {
        setError('Failed to load CMDB data');
      }
    } catch (err) {
      setError('Error loading data: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadCMDBData();
  }, [loadCMDBData]);

  if (!model) {
    return <div>Model not found.</div>;
  }

  return (
    <div className="model-visualizer-container">
      <h2>{model.name}</h2>
      {/* TODO: Visualize the model (diagram, table, etc.) */}
      <p>{model.description}</p>
      {/* TODO: Add more details and ServiceNow/CMDB context */}
      {isLoading && <p>Loading CMDB data...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {cmdbData && (
        <div>
          <h3>Related CMDB Items (Mock Data)</h3>
          <ul>
            {cmdbData.map((item) => (
              <li key={item.sys_id}>
                {item.name} - {item.type} ({item.status})
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isLoading && (
        <button onClick={loadCMDBData}>
          Refresh CMDB Data
        </button>
      )}
    </div>
  );
}

export default ModelVisualizer; 