import React, { useState, useContext } from 'react';
import Menu from '../components/Menu/Menu';
import Toolbar from '../components/Toolbars/Toolbar';
import { LanguageContext } from '../contexts/LanguageContext';
import './styles/MenuPage.css';

const MenuPage = () => {
  const { translations } = useContext(LanguageContext);

  const menuItems = [
    { name: translations.margherita, description: translations.margherita, price: '$12', detail: translations.margheritaDetail },
    { name: translations.pepperoni, description: translations.pepperoni, price: '$15', detail: translations.pepperoniDetail },
    { name: translations.caesar, description: translations.caesar, price: '$10', detail: translations.caesarDetail },
    { name: translations.carbonara, description: translations.carbonara, price: '$14', detail: translations.carbonaraDetail },
  ];

  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  const showTooltip = (content, e) => {
    setTooltip({
      visible: true,
      content,
      x: e.clientX,
      y: e.clientY
    });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{translations.menu}</h1>
      </header>
      <main>
        <Menu menuItems={menuItems} showTooltip={showTooltip} hideTooltip={hideTooltip} />
        <Toolbar buttonText={translations.reserveButton} link="/reservation" />
        {tooltip.visible && (
          <div className="tooltip" style={{ top: tooltip.y, left: tooltip.x }}>
            {tooltip.content}
          </div>
        )}
        <LanguageSelector />
      </main>
    </div>
  );
};

const LanguageSelector = () => {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      <button onClick={() => setLanguage('fr')}>FR</button>
      <button onClick={() => setLanguage('nl')}>NL</button>
      <button onClick={() => setLanguage('en')}>EN</button>
    </div>
  );
};

export default MenuPage;
