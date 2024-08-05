import React from 'react';
import './Plats.css';

const Plats = ({ name, description, price, detail, showTooltip, hideTooltip }) => (
  <div
    className="menu-item"
    onMouseEnter={(e) => showTooltip(detail, e)}
    onMouseLeave={hideTooltip}
  >
    <h2>{name}</h2>
    <p>{description}</p>
    <span>{price}</span>
  </div>
);

export default Plats;
