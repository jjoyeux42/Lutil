import React, { useState, useEffect } from 'react';
import '../styles/pages/CommunityManagement.css';

const CommunityManagement: React.FC = () => {
  // Données pour le carrousel de tendances
  const [trends, setTrends] = useState([
    {
      id: 1,
      title: "Marketing conversationnel",
      description: "Les marques adoptent de plus en plus les chatbots et assistants IA pour offrir une expérience personnalisée.",
      category: "Marketing digital",
      source: "Forbes",
      date: "il y a 2 jours"
    },
    {
      id: 2,
      title: "Vidéos verticales courtes",
      description: "Le format vertical continue sa domination avec TikTok, Reels et YouTube Shorts qui captent l'attention des utilisateurs.",
      category: "Contenu",
      source: "Social Media Today",
      date: "il y a 3 jours"
    },
    {
      id: 3,
      title: "Social commerce",
      description: "L'achat direct via les plateformes sociales devient un canal de vente incontournable pour les marques.",
      category: "E-commerce",
      source: "Business Insider",
      date: "il y a 4 jours"
    },
    {
      id: 4,
      title: "Marketing d'influence authentique",
      description: "Les micro-influenceurs gagnent en importance grâce à leur authenticité et leurs communautés engagées.",
      category: "Influence",
      source: "AdWeek",
      date: "il y a 5 jours"
    }
  ]);

  // État pour suivre l'index actif du carrousel
  const [activeSlide, setActiveSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setActiveSlide((current) => (current === trends.length - 1 ? 0 : current + 1));
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setActiveSlide((current) => (current === 0 ? trends.length - 1 : current - 1));
  };

  // Auto-rotation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const socialNetworks = [
    {
      name: 'Facebook',
      icon: 'fa-facebook',
      color: '#4267B2',
      followers: '5,240',
      growth: '+3.2%',
      engagement: '4.7%',
      posts: 24,
      comments: 156,
      shares: 87,
      recentPosts: [
        {
          id: 'fb1',
          content: "Découvrez notre nouvelle collection printemps-été ! 🌞 #NouvelleCollection #ModeDurable",
          image: "https://via.placeholder.com/300x200",
          date: "Hier à 14:30",
          likes: 123,
          comments: 45,
          shares: 12
        },
        {
          id: 'fb2',
          content: "🎉 Offre spéciale weekend : -20% sur tout le site avec le code WEEKEND20 !",
          image: null,
          date: "il y a 3 jours",
          likes: 89,
          comments: 23,
          shares: 34
        }
      ]
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      color: '#E1306C',
      followers: '8,120',
      growth: '+4.8%',
      engagement: '6.2%',
      posts: 36,
      comments: 285,
      shares: 104,
      recentPosts: [
        {
          id: 'ig1',
          content: "✨ L'art de la simplicité ✨ #MinimalismeChic #TenuesDuJour",
          image: "https://via.placeholder.com/300x300",
          date: "Aujourd'hui à 10:15",
          likes: 342,
          comments: 56,
          shares: null
        }
      ]
    },
    {
      name: 'Pinterest',
      icon: 'fa-pinterest',
      color: '#E60023',
      followers: '3,450',
      growth: '+2.5%',
      engagement: '3.8%',
      posts: 42,
      comments: 78,
      shares: 215,
      recentPosts: [
        {
          id: 'pin1',
          content: "5 façons de porter un foulard en soie 🧣 #StyleInspiration #AccesoiresMode",
          image: "https://via.placeholder.com/236x350",
          date: "il y a 2 jours",
          likes: 156,
          comments: 4,
          shares: 78
        }
      ]
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      color: '#0077B5',
      followers: '2,780',
      growth: '+1.9%',
      engagement: '2.3%',
      posts: 18,
      comments: 65,
      shares: 42,
      recentPosts: [
        {
          id: 'ln1',
          content: "Nous sommes fiers d'annoncer notre nouvelle collaboration avec @EntreprisePartenaire pour un avenir plus durable dans l'industrie de la mode.",
          image: "https://via.placeholder.com/600x300",
          date: "il y a 4 jours",
          likes: 95,
          comments: 12,
          shares: 8
        }
      ]
    }
  ];

  return (
    <div className="community-page">
      <div className="page-header">
        <h1>Community Management</h1>
        <button className="btn-primary">
          <i className="fas fa-plus"></i> Créer un post
        </button>
      </div>
      
      {/* Carrousel des tendances */}
      <div className="trends-carousel-section">
        <div className="section-header">
          <h2><i className="fas fa-chart-line"></i> Dernières tendances</h2>
          <div className="ai-badge">
            <i className="fas fa-robot"></i> Powered by AI
          </div>
        </div>
        
        <div className="trends-carousel">
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carousel-container">
            {trends.map((trend, index) => (
              <div 
                key={trend.id} 
                className={`trend-card ${index === activeSlide ? 'active' : ''}`}
                style={{transform: `translateX(${(index - activeSlide) * 100}%)`}}
              >
                <div className="trend-category">{trend.category}</div>
                <h3>{trend.title}</h3>
                <p>{trend.description}</p>
                <div className="trend-footer">
                  <span className="trend-source">{trend.source}</span>
                  <span className="trend-date">{trend.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-arrow next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          
          <div className="carousel-indicators">
            {trends.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="social-overview">
        {socialNetworks.map((network) => (
          <div 
            key={network.name} 
            className="social-card" 
            style={{ borderTopColor: network.color }}
          >
            <div className="social-header">
              <div className="social-icon" style={{ backgroundColor: network.color }}>
                <i className={`fab ${network.icon}`}></i>
              </div>
              <h3>{network.name}</h3>
            </div>
            
            <div className="social-stats">
              <div className="stat-item">
                <span className="stat-label">Abonnés</span>
                <span className="stat-value">{network.followers}</span>
                <span className="stat-change positive">{network.growth}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Engagement</span>
                <span className="stat-value">{network.engagement}</span>
              </div>
            </div>
            
            <div className="social-activity">
              <div className="activity-item">
                <i className="fas fa-pencil-alt"></i>
                <span>{network.posts} posts</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-comment"></i>
                <span>{network.comments} commentaires</span>
              </div>
              <div className="activity-item">
                <i className="fas fa-share"></i>
                <span>{network.shares} partages</span>
              </div>
            </div>
            
            {/* Ajout des publications récentes */}
            <div className="recent-posts">
              <h4>Publications récentes</h4>
              {network.recentPosts.map(post => (
                <div key={post.id} className="recent-post">
                  {post.image && (
                    <div className="post-image">
                      <img src={post.image} alt="" />
                    </div>
                  )}
                  <div className="post-content">
                    <p>{post.content}</p>
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <div className="post-stats">
                        {post.likes !== null && (
                          <span><i className="fas fa-heart"></i> {post.likes}</span>
                        )}
                        {post.comments !== null && (
                          <span><i className="fas fa-comment"></i> {post.comments}</span>
                        )}
                        {post.shares !== null && (
                          <span><i className="fas fa-share"></i> {post.shares}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-actions">
              <button className="action-btn">
                <i className="fas fa-eye"></i> Voir
              </button>
              <button className="action-btn">
                <i className="fas fa-cog"></i> Gérer
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="content-calendar">
        <div className="section-header">
          <h2>Calendrier de contenu</h2>
          <button className="view-all">Voir tout <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="calendar-placeholder">
          <i className="fas fa-calendar-alt"></i>
          <p>Calendrier de publication à venir</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityManagement;