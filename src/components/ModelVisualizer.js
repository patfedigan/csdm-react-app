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


  const loadCMDBData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchCMDBItems();
      if (result.success) {
        setCmdbData(result.data);
      } else {
        setError('Failed to load CMDB data');
      }
    } catch (error) {
      setError('Error loading data: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadCMDBData();
  }, []);

  if (!model) {
    return <div>Model not found.</div>;
  }

  return (
    <div className="model-visualizer-container">
      <h2>{model.name}</h2>
      {/* Model Details Table */}
      <div className="model-details">
        <h3>Model Details</h3>
        <table className="model-table">
          <tbody>
            <tr>
              <td><strong>Model ID:</strong></td>
              <td>{model.id}</td>
            </tr>
            <tr>
              <td><strong>Model Type:</strong></td>
              <td>{model.name}</td>
            </tr>
            <tr>
              <td><strong>Description:</strong></td>
              <td>{model.description}</td>
            </tr>
            <tr>
              <td><strong>ServiceNow Context:</strong></td>
              <td>CSDM Business Model Integration</td>
            </tr>
          </tbody>
        </table>
      </div>
      {isLoading && <p>Loading CMDB data...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {/* Enhanced ServiceNow/CMDB Context */}
      {cmdbData && (
        <div className="cmdb-context">
          <h3>ServiceNow CMDB Context</h3>
          <div className="cmdb-grid">
            <div className="cmdb-card">
              <h4>Configuration Items</h4>
              <div className="cmdb-items">
                {cmdbData.filter(item => item.type === 'server' || item.type === 'database').map((item) => (
                  <div key={item.sys_id} className="cmdb-item">
                    <strong>{item.name}</strong>
                    <span className={`status ${item.status}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cmdb-card">
              <h4>Service Dependencies</h4>
              <div className="service-deps">
                <p>Model: <strong>{model.name}</strong></p>
                <p>Dependencies: Database, Network, Security</p>
                <p>Impact Level: Medium</p>
              </div>
            </div>
            
            <div className="cmdb-card">
              <h4>Risk Assessment</h4>
              <div className="risk-info">
                <p>Availability: 99.9%</p>
                <p>Performance: Optimal</p>
                <p>Security: Compliant</p>
              </div>
            </div>
          </div>
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