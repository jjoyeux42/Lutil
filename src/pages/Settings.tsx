/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import '../styles/pages/Settings.css';

interface ProfileSettings {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

interface StoreSettings {
  storeName: string;
  description: string;
  logo: string;
  currency: string;
}

interface PaymentSettings {
  paymentMethods: string[];
  stripeConnected: boolean;
  paypalConnected: boolean;
}

interface ShippingSettings {
  zones: Array<{
    name: string;
    countries: string[];
    rate: number;
  }>;
  freeShippingThreshold: number;
}

interface NotificationSettings {
  email: boolean;
  push: boolean;
  orderUpdates: boolean;
  marketing: boolean;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  lastPasswordChange: string;
  sessions: Array<{
    device: string;
    location: string;
    lastAccess: string;
  }>;
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState<ProfileSettings>({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+33 6 12 34 56 78',
    avatar: '/avatars/default.png'
  });

  const [store, setStore] = useState<StoreSettings>({
    storeName: 'Ma Boutique',
    description: 'Description de la boutique',
    logo: '/logo.png',
    currency: 'EUR'
  });

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaved(true);
    setLoading(false);
    setTimeout(() => setSaved(false), 3000);
  };

  const renderProfileSection = () => (
    <div className="settings-section">
      <h2>Profil</h2>
      <form className="settings-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="form-group">
          <label>Nom complet</label>
          <input 
            type="text" 
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Téléphone</label>
          <input 
            type="tel" 
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Photo de profil</label>
          <div className="avatar-upload">
            <img src={profile.avatar} alt="Avatar" className="avatar-preview" />
            <button type="button" className="btn-secondary">Changer</button>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Enregistrement...' : 'Enregistrer'}
          </button>
        </div>
      </form>
    </div>
  );

  const renderStoreSection = () => (
    <div className="settings-section">
      <h2>Paramètres de la Boutique</h2>
      <form className="settings-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="form-group">
          <label>Nom de la boutique</label>
          <input 
            type="text" 
            value={store.storeName}
            onChange={(e) => setStore({...store, storeName: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            value={store.description}
            onChange={(e) => setStore({...store, description: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Logo</label>
          <div className="logo-upload">
            <img src={store.logo} alt="Logo" className="logo-preview" />
            <button type="button" className="btn-secondary">Changer</button>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Enregistrement...' : 'Enregistrer'}
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Paramètres</h1>
        {saved && <div className="save-notification">Modifications enregistrées ✓</div>}
      </div>
      
      <div className="settings-container">
        <div className="settings-sidebar">
          <ul className="settings-tabs">
            <li>
              <button 
                className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                <i className="fas fa-sliders-h"></i>
                Général
              </button>
            </li>
            <li>
              <button 
                className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="fas fa-user-circle"></i>
                Profil
              </button>
            </li>
            <li>
              <button 
                className={`settings-tab ${activeTab === 'store' ? 'active' : ''}`}
                onClick={() => setActiveTab('store')}
              >
                <i className="fas fa-store"></i>
                Boutique
              </button>
            </li>
            <li>
              <button 
                className={`settings-tab ${activeTab === 'payment' ? 'active' : ''}`}
                onClick={() => setActiveTab('payment')}
              >
                <i className="fas fa-credit-card"></i>
                Paiement
              </button>
            </li>
            <li>
              <button 
                className={`settings-tab ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipping')}
              >
                <i className="fas fa-truck"></i>
                Livraison
              </button>
            </li>
            <li>
              <button 
                className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                <i className="fas fa-bell"></i>
                Notifications
              </button>
            </li>
            <li>
              <button 
                className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <i className="fas fa-shield-alt"></i>
                Sécurité
              </button>
            </li>
          </ul>
        </div>
        
        <div className="settings-content">
          {activeTab === 'general' && (
            <div className="settings-section">
              <h2>Paramètres Généraux</h2>
              <form className="settings-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div className="form-group">
                  <label>Langue</label>
                  <select defaultValue="fr">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Fuseau horaire</label>
                  <select defaultValue="Europe/Paris">
                    <option value="Europe/Paris">Europe/Paris (GMT+01:00)</option>
                    <option value="Europe/London">Europe/London (GMT+00:00)</option>
                    <option value="America/New_York">America/New_York (GMT-05:00)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Format de date</label>
                  <select defaultValue="dd/mm/yyyy">
                    <option value="dd/mm/yyyy">JJ/MM/AAAA</option>
                    <option value="mm/dd/yyyy">MM/JJ/AAAA</option>
                    <option value="yyyy-mm-dd">AAAA-MM-JJ</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Devise</label>
                  <select defaultValue="EUR">
                    <option value="EUR">Euro (€)</option>
                    <option value="USD">Dollar US ($)</option>
                    <option value="GBP">Livre Sterling (£)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Thème</label>
                  <div className="theme-options">
                    <div className="theme-option active">
                      <div className="theme-preview light"></div>
                      <span>Clair</span>
                    </div>
                    <div className="theme-option">
                      <div className="theme-preview dark"></div>
                      <span>Sombre</span>
                    </div>
                    <div className="theme-option">
                      <div className="theme-preview system"></div>
                      <span>Système</span>
                    </div>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Enregistrement...' : 'Enregistrer'}
                  </button>
                  <button type="reset" className="btn-secondary">Annuler</button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab === 'profile' && renderProfileSection()}
          {activeTab === 'store' && renderStoreSection()}
          {activeTab === 'payment' && (
            <div className="settings-section">
              <h2>Options de Paiement</h2>
              <div className="payment-methods">
                <div className="payment-method">
                  <img src="/icons/stripe.png" alt="Stripe" />
                  <div className="method-info">
                    <h3>Stripe</h3>
                    <p>Connecté</p>
                  </div>
                  <button className="btn-secondary">Configurer</button>
                </div>
                <div className="payment-method">
                  <img src="/icons/paypal.png" alt="PayPal" />
                  <div className="method-info">
                    <h3>PayPal</h3>
                    <p>Non connecté</p>
                  </div>
                  <button className="btn-primary">Connecter</button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className="settings-section">
              <h2>Options de Livraison</h2>
              <div className="shipping-zones">
                <button className="btn-primary">Ajouter une zone de livraison</button>
                <div className="shipping-zone">
                  <h3>France Métropolitaine</h3>
                  <p>Frais de port : 5,90 €</p>
                  <button className="btn-secondary">Modifier</button>
                </div>
                <div className="shipping-zone">
                  <h3>Union Européenne</h3>
                  <p>Frais de port : 12,90 €</p>
                  <button className="btn-secondary">Modifier</button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notifications</h2>
              <form className="settings-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Notifications par email
                  </label>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Notifications push
                  </label>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Mises à jour des commandes
                  </label>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    Communications marketing
                  </label>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Enregistrement...' : 'Enregistrer'}
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeTab === 'security' && (
            <div className="settings-section">
              <h2>Sécurité</h2>
              <div className="security-settings">
                <div className="security-option">
                  <h3>Authentification à deux facteurs</h3>
                  <p>Protégez votre compte avec une couche de sécurité supplémentaire</p>
                  <button className="btn-primary">Activer</button>
                </div>
                <div className="security-option">
                  <h3>Mot de passe</h3>
                  <p>Dernière modification : il y a 3 mois</p>
                  <button className="btn-secondary">Changer le mot de passe</button>
                </div>
                <div className="security-option">
                  <h3>Sessions actives</h3>
                  <div className="sessions-list">
                    <div className="session-item">
                      <i className="fas fa-laptop"></i>
                      <div className="session-info">
                        <p>Windows 10 - Chrome</p>
                        <small>Paris, France - Dernière activité : aujourd'hui</small>
                      </div>
                      <button className="btn-danger">Déconnecter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;