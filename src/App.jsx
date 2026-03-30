import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('home')} onGoToSignup={() => setCurrentPage('signup')} />;
  }

  if (currentPage === 'signup') {
    return <Signup onBack={() => setCurrentPage('home')} onGoToLogin={() => setCurrentPage('login')} />;
  }

  return <Home onLoginClick={() => setCurrentPage('login')} onSignupClick={() => setCurrentPage('signup')} />;
}

export default App;