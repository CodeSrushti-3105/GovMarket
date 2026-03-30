import React, { useState } from 'react';

const Login = ({ onBack, onGoToSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 md:top-10 left-6 md:left-10 text-slate-500 hover:text-slate-800 font-medium text-sm flex items-center gap-2 transition-colors"
      >
        ← Back to Home
      </button>
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-slate-100">
        
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-sm text-slate-500">Please enter your details to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-3.5 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-5 py-3.5 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3.5 mt-2 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <button onClick={onGoToSignup} type="button" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Sign up
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
