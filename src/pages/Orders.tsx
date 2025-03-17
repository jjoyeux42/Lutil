/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import '../styles/pages/Orders.css';

const Orders: React.FC = () => {
  const [activeSection, setActiveSection] = useState('shopify');
  const [orders, setOrders] = useState([
    { id: '#12345', customer: 'Jean Dupont', date: '15/03/2023', total: 799, items: 1, status: 'En attente' },
    { id: '#12346', customer: 'Marie Martin', date: '14/03/2023', total: 1299, items: 3, status: 'Livré' },
    { id: '#12347', customer: 'Pierre Dubois', date: '13/03/2023', total: 249, items: 2, status: 'En transit' },
    { id: '#12348', customer: 'Sophie Lefebvre', date: '12/03/2023', total: 89, items: 1, status: 'Livré' },
    { id: '#12349', customer: 'Thomas Bernard', date: '11/03/2023', total: 129, items: 1, status: 'Annulé' },
  ]);

  const [teemillOrders, setTeemillOrders] = useState([
    { id: 'TM-001', product: 'T-shirt Bio', quantity: 50, date: '15/03/2023', status: 'En production' },
    { id: 'TM-002', product: 'Sweat-shirt', quantity: 25, date: '14/03/2023', status: 'Expédié' },
    { id: 'TM-003', product: 'Tote bag', quantity: 100, date: '13/03/2023', status: 'En attente' },
  ]);

  const handleSync = () => {
    // Implémenter la synchronisation avec Teemill ici
    console.log('Synchronisation avec Teemill...');
  };

  return (
    <div className="orders-page">
      <div className="page-header">
        <h1>Gestion des Commandes</h1>
        <div className="section-tabs">
          <button 
            className={`section-tab ${activeSection === 'shopify' ? 'active' : ''}`}
            onClick={() => setActiveSection('shopify')}
          >
            Commandes Shopify
          </button>
          <button 
            className={`section-tab ${activeSection === 'teemill' ? 'active' : ''}`}
            onClick={() => setActiveSection('teemill')}
          >
            Commandes Teemill
          </button>
        </div>
      </div>

      {activeSection === 'shopify' && (
        <>
          <div className="filters">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input type="search" placeholder="Rechercher une commande..." />
            </div>
            <div className="filter-actions">
              <select className="filter-select">
                <option value="">Trier par date</option>
                <option value="asc">Plus récent</option>
                <option value="desc">Plus ancien</option>
              </select>
            </div>
          </div>

          <div className="filter-tabs">
            <button className="filter-tab active">Toutes</button>
            <button className="filter-tab">En attente</button>
            <button className="filter-tab">En transit</button>
            <button className="filter-tab">Livrées</button>
            <button className="filter-tab">Annulées</button>
          </div>
      
          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>ID Commande</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Montant</th>
                  <th>Articles</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.total} €</td>
                    <td>{order.items}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn" title="Voir les détails">
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="action-btn" title="Modifier">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="action-btn" title="Imprimer">
                          <i className="fas fa-print"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {activeSection === 'teemill' && (
        <>
          <div className="filters">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input type="search" placeholder="Rechercher une commande fournisseur..." />
            </div>
            <div className="filter-actions">
              <button className="sync-btn" onClick={handleSync}>
                <i className="fas fa-sync"></i>
                Synchroniser avec Teemill
              </button>
            </div>
          </div>

          <div className="orders-table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>ID Commande</th>
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>Date</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teemillOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.date}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn" title="Voir sur Teemill">
                          <i className="fas fa-external-link-alt"></i>
                        </button>
                        <button className="action-btn" title="Télécharger le bon de commande">
                          <i className="fas fa-download"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      
      <div className="pagination">
        <button className="pagination-btn"><i className="fas fa-chevron-left"></i></button>
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn"><i className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default Orders;