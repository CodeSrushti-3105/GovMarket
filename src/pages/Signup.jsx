import React, { useState } from 'react';

const Signup = ({ onBack, onGoToLogin, onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
    if (onSignupSuccess) onSignupSuccess();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 md:top-10 left-6 md:left-10 text-slate-500 hover:text-slate-800 font-medium text-sm flex items-center gap-2 transition-colors"
      >
        ← Back to Home
      </button>
      
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-slate-100 my-16 md:my-0">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-sm text-slate-500">Join GovMarket and connect with opportunities.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-5 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-700"
            >
              <option value="" disabled>Select your role</option>
              <option value="buyer">Government Buyer</option>
              <option value="seller">Seller</option>
              <option value="oem">OEM</option>
              <option value="investor">Investor</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-5 py-3 rounded-xl text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3.5 mt-2 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Create account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <button onClick={onGoToLogin} type="button" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            Log in
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
