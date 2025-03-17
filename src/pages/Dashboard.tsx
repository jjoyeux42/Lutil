import React, { useState, useEffect } from 'react';
import '../styles/pages/Dashboard.css';

const Dashboard: React.FC = () => {
  // Données simulées (à remplacer par une connexion à l'API Shopify)
  const [dashboardData, setDashboardData] = useState({
    revenue: {
      current: 15350,
      previous: 13650,
      percentChange: 12.5
    },
    sales: {
      current: 125,
      previous: 116,
      percentChange: 7.8
    },
    monthlyOrders: {
      current: 38,
      previous: 35,
      percentChange: 8.6
    },
    customers: {
      current: 1240,
      previous: 1180,
      percentChange: 5.1
    },
    recentOrders: [
      { id: '#12345', customer: 'Jean Dupont', date: '15/03/2023', total: 799, status: 'En attente' },
      { id: '#12346', customer: 'Marie Martin', date: '14/03/2023', total: 1299, status: 'Livré' },
      { id: '#12347', customer: 'Pierre Dubois', date: '13/03/2023', total: 249, status: 'En transit' },
      { id: '#12348', customer: 'Sophie Lefebvre', date: '12/03/2023', total: 89, status: 'Livré' }
    ]
  });

  // Simuler une mise à jour en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      // Simuler une nouvelle vente
      if (Math.random() > 0.7) {
        const newRevenue = dashboardData.revenue.current + Math.floor(Math.random() * 200);
        const newSales = dashboardData.sales.current + 1;
        const newMonthlyOrders = dashboardData.monthlyOrders.current + 1;
        
        setDashboardData(prev => ({
          ...prev,
          revenue: {
            ...prev.revenue,
            current: newRevenue,
            percentChange: parseFloat(((newRevenue - prev.revenue.previous) / prev.revenue.previous * 100).toFixed(1))
          },
          sales: {
            ...prev.sales,
            current: newSales,
            percentChange: parseFloat(((newSales - prev.sales.previous) / prev.sales.previous * 100).toFixed(1))
          },
          monthlyOrders: {
            ...prev.monthlyOrders,
            current: newMonthlyOrders,
            percentChange: parseFloat(((newMonthlyOrders - prev.monthlyOrders.previous) / prev.monthlyOrders.previous * 100).toFixed(1))
          }
        }));
      }
    }, 30000); // Vérifier toutes les 30 secondes
    
    return () => clearInterval(interval);
  }, [dashboardData]);

  // Fonction pour formater les nombres
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Tableau de bord</h1>
        <div className="shopify-connection">
          <div className="connection-status connected">
            <i className="fas fa-circle"></i> Connecté à Shopify
          </div>
          <span className="last-sync">Dernière synchronisation: il y a 5 minutes</span>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <i className="fas fa-euro-sign"></i>
          <h3>Chiffre d'affaires</h3>
          <p className="stat-value">{formatNumber(dashboardData.revenue.current)} €</p>
          <p className={`stat-change ${dashboardData.revenue.percentChange >= 0 ? 'positive' : 'negative'}`}>
            {dashboardData.revenue.percentChange >= 0 ? '+' : ''}{dashboardData.revenue.percentChange}% 
            <i className={`fas ${dashboardData.revenue.percentChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          </p>
        </div>
        
        <div className="stat-card">
          <i className="fas fa-shopping-cart"></i>
          <h3>Ventes totales</h3>
          <p className="stat-value">{formatNumber(dashboardData.sales.current)}</p>
          <p className={`stat-change ${dashboardData.sales.percentChange >= 0 ? 'positive' : 'negative'}`}>
            {dashboardData.sales.percentChange >= 0 ? '+' : ''}{dashboardData.sales.percentChange}%
            <i className={`fas ${dashboardData.sales.percentChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          </p>
        </div>
        
        <div className="stat-card">
          <i className="fas fa-calendar-check"></i>
          <h3>Commandes du mois</h3>
          <p className="stat-value">{formatNumber(dashboardData.monthlyOrders.current)}</p>
          <p className={`stat-change ${dashboardData.monthlyOrders.percentChange >= 0 ? 'positive' : 'negative'}`}>
            {dashboardData.monthlyOrders.percentChange >= 0 ? '+' : ''}{dashboardData.monthlyOrders.percentChange}%
            <i className={`fas ${dashboardData.monthlyOrders.percentChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          </p>
        </div>
        
        <div className="stat-card">
          <i className="fas fa-users"></i>
          <h3>Clients</h3>
          <p className="stat-value">{formatNumber(dashboardData.customers.current)}</p>
          <p className={`stat-change ${dashboardData.customers.percentChange >= 0 ? 'positive' : 'negative'}`}>
            {dashboardData.customers.percentChange >= 0 ? '+' : ''}{dashboardData.customers.percentChange}%
            <i className={`fas ${dashboardData.customers.percentChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          </p>
        </div>
      </div>
      
      <div className="recent-orders">
        <div className="section-header">
          <h2>Commandes Récentes</h2>
          <button className="view-all">Voir tout <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID Commande</th>
                <th>Client</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total} €</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn"><i className="fas fa-eye"></i></button>
                    <button className="action-btn"><i className="fas fa-edit"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="integration-notice">
        <i className="fas fa-info-circle"></i>
        <p>Les données de ce tableau de bord sont actualisées automatiquement depuis votre boutique Shopify.</p>
      </div>
    </div>
  );
};

export default Dashboard;