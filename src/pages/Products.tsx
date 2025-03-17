/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import '../styles/pages/Products.css';

const Products: React.FC = () => {
  // Données simulées pour les produits les plus vendus (à remplacer par les données réelles de l'API Shopify)
  const [topProducts, setTopProducts] = useState([
    {
      id: 1,
      name: "T-shirt Premium",
      image: "https://via.placeholder.com/50",
      price: 29.99,
      sold: 124,
      stock: 45
    },
    {
      id: 2,
      name: "Sweat à capuche",
      image: "https://via.placeholder.com/50",
      price: 49.99,
      sold: 98,
      stock: 32
    },
    {
      id: 3,
      name: "Tote bag",
      image: "https://via.placeholder.com/50",
      price: 19.99,
      sold: 87,
      stock: 65
    },
    {
      id: 4,
      name: "Mug personnalisé",
      image: "https://via.placeholder.com/50",
      price: 14.99,
      sold: 76,
      stock: 120
    }
  ]);

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Boutique Shopify</h1>
        <div className="shopify-actions">
          <button className="btn-secondary">
            <i className="fas fa-sync"></i> Actualiser
          </button>
          <button className="btn-primary">
            <i className="fas fa-external-link-alt"></i> Ouvrir Shopify
          </button>
        </div>
      </div>
      
      <div className="dashboard-container">
        <div className="top-products-section">
          <div className="section-header">
            <h2><i className="fas fa-crown"></i> Produits les plus vendus</h2>
            <span className="last-updated">Dernière mise à jour: aujourd'hui à 15:45</span>
          </div>
          
          <div className="top-products-grid">
            {topProducts.map(product => (
              <div key={product.id} className="top-product-card">
                <div className="product-rank">#{topProducts.indexOf(product) + 1}</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <span className="product-price">{product.price} €</span>
                    <span className="product-sold">{product.sold} vendus</span>
                  </div>
                  <div className="stock-info">
                    <div className="stock-bar">
                      <div 
                        className="stock-level" 
                        style={{width: `${Math.min(100, (product.stock / 150) * 100)}%`}}
                      ></div>
                    </div>
                    <span className="stock-text">{product.stock} en stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="shopify-container">
        <div className="shopify-loading">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Chargement de l'interface Shopify...</p>
        </div>
        
        {/* Le iframe pour intégrer Shopify */}
        <iframe 
          src="https://admin.shopify.com/store/94c013/products?start=MQ%3D%3D&selectedView=all" 
          className="shopify-iframe"
          title="Shopify Admin"
        ></iframe>
        
        <div className="shopify-integration-notice">
          <p>
            <i className="fas fa-info-circle"></i>
            Pour intégrer votre backoffice Shopify, remplacez <code>YOUR_STORE_NAME</code> dans le code source 
            par le nom de votre boutique Shopify.
          </p>
          <p className="small">
            Note: L'intégration avec l'API Shopify est nécessaire pour afficher les données en temps réel des produits les plus vendus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;