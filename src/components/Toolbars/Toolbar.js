import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = ({ buttonText, link }) => {
  const navigate = useNavigate();
  
  return (
    <div className="button-container">
      <button className="button" onClick={() => navigate(link)}>
        {buttonText}
      </button>
    </div>
  );
};

export default Toolbar;
