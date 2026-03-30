import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('home')} />;
  }

  return <Home onLoginClick={() => setCurrentPage('login')} />;
}

export default App;