import React from 'react';
import { 
  Building2, 
  Store, 
  Factory, 
  TrendingUp, 
  FileText, 
  Gavel, 
  Award, 
  Truck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Home = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-10 bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-blue-900">
            Gov<span className="text-blue-600">Market</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors pb-1">Marketplace</a>
          <a href="#" className="hover:text-blue-600 transition-colors pb-1">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors pb-1">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={onLoginClick} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Login
          </button>
          <button onClick={onSignupClick} className="text-sm font-medium bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
            Signup
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 space-y-6 z-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Government <br className="hidden lg:block" />
            <span className="text-blue-600">Marketplace</span> <br className="hidden lg:block" />
            Platform
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Connecting Government, Sellers, OEMs, and Investors through an architecturally superior procurement ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 text-sm">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all text-sm">
              Explore Marketplace
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none h-[350px] lg:h-[450px]">
          {/* Abstract background shape for the building image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[2rem] transform rotate-2 overflow-hidden shadow-xl transition-transform hover:rotate-1 duration-500">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Building Architecture" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 border border-slate-50 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Active Tenders</p>
              <p className="text-xl font-extrabold text-slate-800 leading-none">1,284</p>
              <div className="w-full bg-slate-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 w-3/4 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Platform Stakeholders) */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Platform Stakeholders</h2>
          <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Government Buyer */}
            <div className="col-span-1 md:col-span-2 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Government Buyer</h3>
                <p className="text-slate-600 text-sm mb-6 max-w-md leading-relaxed">
                  Streamlined procurement for government officials. Simplify complex purchasing cycles with automated compliance checks and real-time budget tracking.
                </p>
              </div>
              <div className="h-40 md:h-48 rounded-xl overflow-hidden bg-slate-100">
                 <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Government Officials" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Seller */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1 flex flex-col justify-between">
                <div>
                  <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600 mb-5">
                    <Store className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Seller</h3>
                  <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                    Access new markets and grow your business with direct access to regional and national contracts.
                  </p>
                </div>
                <a href="#" className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 w-max">
                  Join the network <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* OEM */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1 flex flex-col justify-between">
                <div>
                  <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-5">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">OEM</h3>
                  <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                    Efficiently manage your distribution network and monitor product lifecycle within government assets.
                  </p>
                </div>
                <a href="#" className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 w-max">
                  Manage supply <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Investor Relations */}
            <div className="col-span-1 md:col-span-3 bg-[#42618A] rounded-2xl p-6 md:p-8 shadow-md text-white flex flex-col md:flex-row items-center justify-between gap-8 mt-1">
              <div className="max-w-xl">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Investor Relations</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Identify and track promising government-led opportunities. Leverage deep data analytics to forecast market trends and infrastructure growth drivers.
                </p>
                <button className="bg-white text-[#42618A] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm">
                  Access Data Room
                </button>
              </div>
              <div className="w-full md:w-1/2 flex items-end gap-3 opacity-10 h-28">
                <div className="h-12 w-1/3 bg-white rounded-t-xl"></div>
                <div className="h-28 w-1/3 bg-white rounded-t-xl"></div>
                <div className="h-20 w-1/3 bg-white rounded-t-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">The Procurement Lifecycle</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-12">
            Our "No-Line" workflow methodology ensures absolute clarity from inception to execution.
          </p>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
            {/* Connecting Line hidden on mobile */}
            <div className="hidden md:block absolute top-[2rem] left-[10%] right-[10%] h-[1px] bg-slate-200 border-t border-dashed border-slate-300 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center max-w-[200px] mx-auto bg-white pt-2">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-blue-600 shadow-lg shadow-blue-50 flex items-center justify-center text-blue-600 mb-4 relative">
                <FileText className="w-7 h-7" />
                <span className="absolute -top-2.5 -right-2.5 bg-blue-600 text-white text-[9px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">01</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2 text-base">Government posts tender</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed px-2">Digital verification and standardisation of project requirements.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center max-w-[200px] mx-auto bg-white pt-2">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-100 flex items-center justify-center text-slate-600 mb-4 relative hover:border-blue-200 transition-colors">
                <Gavel className="w-7 h-7" />
                <span className="absolute -top-2.5 -right-2.5 bg-slate-100 text-slate-600 text-[9px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">02</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2 text-base">Sellers bid</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed px-2">Transparent reverse auction mechanism for competitive pricing.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center max-w-[200px] mx-auto bg-white pt-2">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-100 flex items-center justify-center text-slate-600 mb-4 relative hover:border-blue-200 transition-colors">
                <Award className="w-7 h-7" />
                <span className="absolute -top-2.5 -right-2.5 bg-slate-100 text-slate-600 text-[9px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">03</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2 text-base">L1 selection</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed px-2">Automated evaluation based on cost-technical merit.</p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center max-w-[200px] mx-auto bg-white pt-2">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-100 flex items-center justify-center text-slate-600 mb-4 relative hover:border-blue-200 transition-colors">
                <Truck className="w-7 h-7" />
                <span className="absolute -top-2.5 -right-2.5 bg-slate-100 text-slate-600 text-[9px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">04</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2 text-base">Order execution</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed px-2">End-to-end milestone tracking and digital payment settlement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-center md:text-left">
             <span className="text-lg font-bold text-slate-800 block mb-2">
              GovMarket
            </span>
            <p className="text-[11px] text-slate-400 max-w-sm leading-relaxed">
              © {new Date().getFullYear()} GovMarket. Architectural Authority in Procurement. Building the digital infrastructure for sovereign trade.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-slate-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
