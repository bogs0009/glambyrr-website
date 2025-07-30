// src/components/StarRating.jsx
import React from 'react';
import './StarRating.css';

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
