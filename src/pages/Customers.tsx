import React, { useState } from 'react';
import '../styles/pages/Customers.css';

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', orders: 3, spent: 1250, joinDate: '10/01/2023', status: 'Actif' },
    { id: 2, name: 'Marie Martin', email: 'marie.martin@example.com', orders: 5, spent: 2340, joinDate: '15/11/2022', status: 'Actif' },
    { id: 3, name: 'Pierre Dubois', email: 'pierre.dubois@example.com', orders: 1, spent: 249, joinDate: '05/02/2023', status: 'Actif' },
    { id: 4, name: 'Sophie Lefebvre', email: 'sophie.l@example.com', orders: 2, spent: 890, joinDate: '20/12/2022', status: 'Inactif' },
    { id: 5, name: 'Thomas Bernard', email: 'thomas.b@example.com', orders: 6, spent: 3570, joinDate: '02/10/2022', status: 'Actif' },
  ]);

  return (
    <div className="customers-page">
      <div className="page-header">
        <h1>Gestion des Clients</h1>
        <button className="btn-primary">
          <i className="fas fa-plus"></i> Ajouter un client
        </button>
      </div>
      
      <div className="filters">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input type="search" placeholder="Rechercher un client..." />
        </div>
        <div className="filter-actions">
          <select className="filter-select">
            <option value="">Tous les statuts</option>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>
      </div>
      
      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Commandes</th>
              <th>Dépenses</th>
              <th>Date d'inscription</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>#{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.orders}</td>
                <td>{customer.spent} €</td>
                <td>{customer.joinDate}</td>
                <td>
                  <span className={`status-badge ${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn" title="Voir le profil">
                      <i className="fas fa-user"></i>
                    </button>
                    <button className="action-btn" title="Modifier">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="action-btn" title="Historique">
                      <i className="fas fa-history"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
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

export default Customers;