import React from 'react';
import { 
  LayoutGrid, 
  Store, 
  FileText, 
  User, 
  Settings, 
  HelpCircle,
  Search,
  Bell,
  Banknote,
  Archive,
  CheckCircle,
  Clock,
  Plus,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const BuyerDashboard = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-[#f9fafb] font-sans text-slate-900">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#f4f6f8] border-r border-slate-200 flex flex-col hidden md:flex">
        {/* Logo */}
        <div className="p-8 pb-6">
          <h1 className="text-xl font-extrabold text-[#1a2b49] tracking-tight leading-none mb-1">
            The Sovereign
          </h1>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
            Government Portal
          </p>
        </div>

        {/* Top Nav Links */}
        <nav className="flex-1 px-4 space-y-1.5 mt-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-700 rounded-lg shadow-sm font-semibold text-sm border border-slate-100">
            <LayoutGrid className="w-5 h-5 text-blue-600" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-200/50 rounded-lg font-medium text-sm transition-colors">
            <Store className="w-5 h-5 text-slate-500" />
            Marketplace
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-200/50 rounded-lg font-medium text-sm transition-colors">
            <FileText className="w-5 h-5 text-slate-500" />
            Tenders
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-200/50 rounded-lg font-medium text-sm transition-colors">
            <User className="w-5 h-5 text-slate-500" />
            Profile
          </a>
        </nav>

        {/* Bottom Nav Links */}
        <div className="px-4 pb-8">
          <div className="border-t border-slate-200/80 mb-4 pt-4 space-y-1.5">
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-200/50 rounded-lg font-medium text-sm transition-colors">
              <Settings className="w-4 h-4 text-slate-500" />
              Settings
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-200/50 rounded-lg font-medium text-sm transition-colors">
              <HelpCircle className="w-4 h-4 text-slate-500" />
              Support
            </a>
          </div>
          <button className="w-full bg-[#31527c] text-white font-semibold py-3 rounded-lg shadow-sm hover:bg-[#253f63] transition-colors text-sm border border-transparent">
            Create Tender
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        
        {/* Top Navigation Bar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 sticky top-0">
          <div className="flex items-center">
            <div className="md:hidden mr-4"> {/* Mobile menu icon placeholder */} </div>
            <h2 className="text-lg font-bold text-slate-900">Sovereign Marketplace</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-slate-100/70 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white border border-transparent w-72 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#42618A] rounded-full border border-white"></span>
              </button>
              <button className="text-slate-500 bg-slate-100 p-1.5 rounded-full hover:bg-slate-200 transition-colors">
                <HelpCircle className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            <div className="h-8 w-px bg-slate-200"></div>

            <div className="flex items-center gap-3 cursor-pointer group" onClick={onLogout}>
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-slate-900">Min. of Commerce</div>
                <div className="text-[11px] font-medium text-slate-500">Buyer Account</div>
              </div>
              <img 
                src="https://ui-avatars.com/api/?name=Min+Commerce&background=1a2b49&color=fff&bold=true" 
                alt="Profile" 
                className="w-10 h-10 rounded-full border border-slate-200 shadow-sm transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-8 py-10 overflow-y-auto">
          <div className="max-w-[1100px] mx-auto">
            
            {/* Header / Breadcrumbs */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <div className="max-w-2xl">
                <div className="text-xs font-bold text-[#31527c] tracking-wider uppercase mb-3 flex items-center gap-2">
                  <span>Overview</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-slate-500">Performance</span>
                </div>
                <h1 className="text-[32px] font-extrabold text-[#222a35] mb-4">Buyer Dashboard</h1>
                <p className="text-slate-600 leading-relaxed text-[15px] max-w-xl">
                  Welcome back to the Sovereign procurement engine. Track your active requisitions, explore the marketplace, and manage tender life cycles with architectural precision.
                </p>
              </div>
              <button className="bg-[#e9f0f6] text-[#31527c] font-bold py-2.5 px-6 rounded-lg text-sm hover:bg-[#d5e4ef] transition-colors whitespace-nowrap mb-2">
                Export Reports
              </button>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.02)] border border-slate-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#eff3f8] p-2.5 rounded-lg text-[#31527c] shrink-0">
                    <Banknote className="w-5 h-5 text-blue-700" />
                  </div>
                  <span className="text-xs font-bold text-blue-700 mt-1">+12.5%</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Total Spending</div>
                  <div className="text-[26px] font-extrabold text-[#222a35]">$4.2M</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.02)] border border-slate-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-slate-100 p-2.5 rounded-lg text-slate-600 shrink-0">
                    <Archive className="w-5 h-5 text-slate-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 mt-1">0 Active</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Open Tenders</div>
                  <div className="text-[26px] font-extrabold text-[#222a35]">0</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.02)] border border-slate-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#f0f4f9] p-2.5 rounded-lg text-[#4f6785] shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#4f6785]" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 mt-1">98% Match</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Compliant Vendors</div>
                  <div className="text-[26px] font-extrabold text-[#222a35]">156</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.02)] border border-slate-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#eff6ff] p-2.5 rounded-lg text-blue-600 shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Avg. Cycle Time</div>
                  <div className="text-[26px] font-extrabold text-[#222a35]">14 Days</div>
                </div>
              </div>
            </div>

            {/* Empty State Banner */}
            <div className="bg-[#f5f7f9] border border-dashed border-slate-300/80 rounded-[20px] p-12 text-center mb-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                <FileText className="w-9 h-9 text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-[#222a35] mb-3">No tenders yet</h2>
              <p className="text-slate-500 max-w-[480px] mx-auto mb-8 leading-relaxed text-[15px]">
                You haven't initiated any procurement activities. Start by creating a new tender or browsing the marketplace for pre-approved vendors.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#3b5982] text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm hover:bg-[#253f63] transition-colors flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
                  <Plus className="w-4 h-4 text-white/70" /> Start New Tender
                </button>
                <button className="bg-white text-[#31527c] font-bold py-2.5 px-6 rounded-lg shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors text-sm w-full sm:w-auto text-center">
                  Browse Marketplace
                </button>
              </div>
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              
              <div className="bg-white p-8 rounded-xl shadow-sm border-y border-r border-slate-100 border-l-[6px] border-l-[#2a4568] flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-bold text-[#222a35] mb-3">Platform Guidelines</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-[95%]">
                    All procurement activities within the Sovereign Marketplace are governed by the Federal Digital Services Act. Ensure your tender documentation follows the latest architectural authority standards for transparency and accountability.
                  </p>
                </div>
                <a href="#" className="flex items-center gap-2 text-[#31527c] text-xs font-bold tracking-widest uppercase hover:text-blue-900 transition-colors w-max">
                  VIEW COMPLIANCE HUB <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-[#ebf3fa] p-3 rounded-xl text-[#31527c] shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="mt-1">
                    <h3 className="text-[17px] font-bold text-[#222a35] mb-1">Smart Matching</h3>
                    <p className="text-[11px] text-slate-500 font-medium tracking-wide">AI-Driven Insights</p>
                  </div>
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed pt-2">
                  Our new matching engine automatically identifies qualified vendors based on your tender's technical requirements. This reduces discovery time by an average of 40%.
                </p>
              </div>

            </div>

            {/* Footer */}
            <div className="text-center pb-8 border-t border-slate-200/60 pt-8">
              <p className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">
                © 2024 THE SOVEREIGN GOVERNMENT PORTAL • ARCHITECTURAL AUTHORITY FRAMEWORK V2.4
              </p>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default BuyerDashboard;
