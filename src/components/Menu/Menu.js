import React from 'react';
import Plats from '../Plats/Plats';
import './Menu.css';

const Menu = ({ menuItems, showTooltip, hideTooltip }) => (
  <section className="menu">
    {menuItems.map((item, index) => (
      <Plats
        key={index}
        name={item.name}
        description={item.description}
        price={item.price}
        detail={item.detail}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
      />
    ))}
  </section>
);

export default Menu;
