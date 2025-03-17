import React from 'react';
import '../styles/components/TopBar.css';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <header className="top-bar">
      <button className="menu-button" onClick={onMenuClick}>
        <i className="fas fa-bars"></i>
      </button>
      
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input type="search" placeholder="Rechercher..." />
      </div>
      
      <div className="user-profile">
        <i className="fas fa-user"></i>
        <span>Admin</span>
      </div>
    </header>
  );
};

export default TopBar;