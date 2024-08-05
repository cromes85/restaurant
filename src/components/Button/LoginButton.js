import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './LoginButton.css';

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <button className="login-button" onClick={() => setShowModal(true)}>
        {user ? 'Logout' : 'Login'}
      </button>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
};

const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      logout();
      onClose();
    } else if (login(username, password)) {
      onClose();
      navigate('/manage');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <form onSubmit={handleSubmit}>
          <h2>{user ? 'Logout' : 'Login'}</h2>
          {error && <p className="error">{error}</p>}
          {!user && (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}
          <button type="submit">{user ? 'Logout' : 'Login'}</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default LoginButton;
