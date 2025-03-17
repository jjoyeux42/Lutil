import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/', icon: 'fa-home', label: 'Tableau de bord' },
    { path: '/products', icon: 'fa-shopping-bag', label: 'Boutique Shopify' },
    { path: '/orders', icon: 'fa-shopping-cart', label: 'Commandes' },
    { path: '/community', icon: 'fa-comments', label: 'Community Management' },
    { path: '/drive', icon: 'fa-cloud', label: 'Google Drive' },
    { path: '/rapports', icon: 'fa-chart-bar', label: 'Rapports' },
    { path: '/settings', icon: 'fa-cog', label: 'Paramètres' }
  ];

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <nav className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2><i className="fas fa-robot"></i> Lutil</h2>
          <p className="sidebar-subtitle">Assistant personnel</p>
          <button className="close-sidebar" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} onClick={onClose}>
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;