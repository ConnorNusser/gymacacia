import React from 'react';
import cardStyle from '../styles/card.module.css';

function Card() {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.circle}>
        <input className="input" type="text" placeholder="Type here..." />
      </div>
    </div>
  );
}

export default Card;