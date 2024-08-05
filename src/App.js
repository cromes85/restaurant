import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import LoginPage from './pages/LoginPage';
import ManagePage from './pages/ManagePage';
import AuthProvider from './contexts/AuthContext';
import LanguageProvider from './contexts/LanguageContext';
import ProtectedRoute from './components/Security/ProtectedRoute';
import LoginButton from './components/Button/LoginButton';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute roles={['directeur', 'employe']} />}>
              <Route path="/manage" element={<ManagePage />} />
            </Route>
          </Routes>
          <LoginButton />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
