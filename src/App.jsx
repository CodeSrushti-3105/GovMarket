import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BuyerDashboard from './pages/BuyerDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('home')} onGoToSignup={() => setCurrentPage('signup')} onLoginSuccess={() => setCurrentPage('buyer-dashboard')} />;
  }

  if (currentPage === 'signup') {
    return <Signup onBack={() => setCurrentPage('home')} onGoToLogin={() => setCurrentPage('login')} onSignupSuccess={() => setCurrentPage('buyer-dashboard')} />;
  }

  if (currentPage === 'buyer-dashboard') {
    return <BuyerDashboard onLogout={() => setCurrentPage('home')} />;
  }

  return <Home onLoginClick={() => setCurrentPage('login')} onSignupClick={() => setCurrentPage('signup')} />;
}

export default App;