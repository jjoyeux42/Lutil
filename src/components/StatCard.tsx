import React from 'react';
import '../styles/components/StatCard.css';

interface StatCardProps {
  iconName: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean | null;
}

const StatCard: React.FC<StatCardProps> = ({ iconName, title, value, change, isPositive }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <i className={`fas ${iconName}`}></i>
      </div>
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
      <p className={`stat-change ${isPositive === null ? 'neutral' : isPositive ? 'positive' : 'negative'}`}>
        {change}
        {isPositive !== null && (
          <span className="change-icon">
            {isPositive ? '↑' : '↓'}
          </span>
        )}
      </p>
    </div>
  );
};

export default StatCard;