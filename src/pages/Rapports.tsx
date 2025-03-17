import React from 'react';
import '../styles/pages/Analytics.css';

const Analytics: React.FC = () => {
  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Analytiques</h1>
        <div className="date-range">
          <button className="date-btn active">7 jours</button>
          <button className="date-btn">30 jours</button>
          <button className="date-btn">3 mois</button>
          <button className="date-btn">12 mois</button>
          <button className="date-btn custom">Personnalisé</button>
        </div>
      </div>
      
      <div className="analytics-grid">
        <div className="analytics-card">
          <div className="card-header">
            <h3>Ventes Quotidiennes</h3>
            <div className="card-actions">
              <button className="card-action-btn"><i className="fas fa-download"></i></button>
              <button className="card-action-btn"><i className="fas fa-ellipsis-v"></i></button>
            </div>
          </div>
          <div className="chart-container">
            <div className="chart-placeholder">
              <i className="fas fa-chart-line"></i>
              <p>Graphique des ventes quotidiennes</p>
            </div>
          </div>
        </div>
        
        <div className="analytics-card">
          <div className="card-header">
            <h3>Produits les plus vendus</h3>
            <div className="card-actions">
              <button className="card-action-btn"><i className="fas fa-download"></i></button>
              <button className="card-action-btn"><i className="fas fa-ellipsis-v"></i></button>
            </div>
          </div>
          <div className="top-products">
            <div className="top-product-item">
              <span className="rank">1</span>
              <div className="product-info">
                <h4>Smartphone X</h4>
                <p>799 €</p>
              </div>
              <div className="product-sales">
                <span>135 vendus</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="top-product-item">
              <span className="rank">2</span>
              <div className="product-info">
                <h4>Écouteurs Sans Fil</h4>
                <p>129 €</p>
              </div>
              <div className="product-sales">
                <span>98 vendus</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="top-product-item">
              <span className="rank">3</span>
              <div className="product-info">
                <h4>Enceinte Bluetooth</h4>
                <p>89 €</p>
              </div>
              <div className="product-sales">
                <span>67 vendus</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="analytics-card">
          <div className="card-header">
            <h3>Répartition des visiteurs</h3>
            <div className="card-actions">
              <button className="card-action-btn"><i className="fas fa-download"></i></button>
              <button className="card-action-btn"><i className="fas fa-ellipsis-v"></i></button>
            </div>
          </div>
          <div className="chart-container">
            <div className="chart-placeholder">
              <i className="fas fa-chart-pie"></i>
              <p>Graphique de répartition des visiteurs</p>
            </div>
          </div>
        </div>
        
        <div className="analytics-card">
          <div className="card-header">
            <h3>Taux de conversion</h3>
            <div className="card-actions">
              <button className="card-action-btn"><i className="fas fa-download"></i></button>
              <button className="card-action-btn"><i className="fas fa-ellipsis-v"></i></button>
            </div>
          </div>
          <div className="chart-container">
            <div className="chart-placeholder">
              <i className="fas fa-chart-bar"></i>
              <p>Graphique du taux de conversion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;