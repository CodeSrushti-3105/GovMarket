import React from 'react';
import { 
  Home, 
  ShoppingCart, 
  FileText, 
  User, 
  Bell, 
  Search,
  LogOut
} from 'lucide-react';

const BuyerDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="text-xl font-bold text-blue-900">
            Gov<span className="text-blue-600">Market</span>
          </span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <Home className="w-5 h-5 text-blue-600" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
            <ShoppingCart className="w-5 h-5 text-slate-400" />
            Marketplace
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
            <FileText className="w-5 h-5 text-slate-400" />
            Tenders
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
            <User className="w-5 h-5 text-slate-400" />
            Profile
          </a>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button onClick={onLogout} className="flex items-center gap-3 w-full px-3 py-2.5 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="md:hidden text-xl font-bold text-blue-900">
            Gov<span className="text-blue-600">Market</span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-lg items-center bg-slate-100 rounded-lg px-3 py-2 ml-4">
            <Search className="w-4 h-4 text-slate-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search tenders, sellers..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-500 text-slate-900"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm cursor-pointer hover:bg-blue-200 transition-colors">
              JD
            </div>
            {/* Mobile Logout Button */}
            <button onClick={onLogout} className="md:hidden text-slate-500 hover:text-red-600 p-2">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Buyer Dashboard</h1>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200 w-full sm:w-auto">
                + New Tender
              </button>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer">
                 <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                   <FileText className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-500 mb-1">Active Tenders</p>
                   <p className="text-2xl font-bold text-slate-900 leading-none">0</p>
                 </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer">
                 <div className="bg-teal-50 p-4 rounded-xl text-teal-600">
                   <ShoppingCart className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-500 mb-1">Total Purchases</p>
                   <p className="text-2xl font-bold text-slate-900 leading-none">$0</p>
                 </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer sm:col-span-2 lg:col-span-1">
                 <div className="bg-indigo-50 p-4 rounded-xl text-indigo-600">
                   <User className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-500 mb-1">Saved Sellers</p>
                   <p className="text-2xl font-bold text-slate-900 leading-none">0</p>
                 </div>
              </div>
            </div>

            {/* Main Card */}
            <h2 className="text-lg font-bold text-slate-900 mb-4 px-1">Recent Tenders</h2>
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No tenders yet</h3>
              <p className="text-slate-500 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
                You haven't posted any procurement requirements. Create your first tender to start receiving bids from qualified sellers.
              </p>
              <button className="bg-white text-blue-600 border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-200 hover:bg-blue-50 transition-all text-sm">
                Create First Tender
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BuyerDashboard;
