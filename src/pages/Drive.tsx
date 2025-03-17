import React from 'react';
import '../styles/pages/Drive.css';

const Drive: React.FC = () => {
  return (
    <div className="drive-page">
      <div className="page-header">
        <h1>Google Drive</h1>
        <div className="drive-actions">
          <button className="btn-secondary">
            <i className="fas fa-sync"></i> Actualiser
          </button>
          <button className="btn-primary">
            <i className="fas fa-plus"></i> Nouveau
          </button>
        </div>
      </div>
      
      <div className="drive-container">
        <div className="drive-loading">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Chargement de Google Drive...</p>
        </div>
        
        {/* Le iframe pour intégrer Google Drive */}
        <iframe 
          src="https://drive.google.com/embeddedfolderview?id=YOUR_FOLDER_ID#list" 
          className="drive-iframe"
          title="Google Drive"
        ></iframe>
        
        <div className="drive-integration-notice">
          <p>
            <i className="fas fa-info-circle"></i>
        
          </p>
          <p className="small">
            L'ID se trouve dans l'URL de votre dossier : https://drive.google.com/drive/folders/1-K1AKT_i97W0nXFB3jRzj-qmmO53qcSQ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drive;