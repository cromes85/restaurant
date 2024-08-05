import React, { createContext, useState } from 'react';
import { getUsers } from '../auth/users';

export const AuthContext = createContext();

const licenseKey = 'your-secure-license-key'; // Clé de licence directement incluse pour l'exemple

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    try {
      const users = getUsers(licenseKey);
      if (users[username] && users[username].password === password) {
        setUser({ username, role: users[username].role });
        return true;
      }
    } catch (error) {
      console.error(error.message);
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
