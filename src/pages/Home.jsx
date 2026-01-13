import React, { useState } from 'react';
import { Search, Shield, FileText, Camera, Trash2, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white">
      
      {/* ⚪ Subtle Gradient Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/[0.03] blur-[150px]" />
      </div>

      {/* ⬛ Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between border-b border-neutral-900 bg-black/90 backdrop-blur-md">
        <div className="flex items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <Grid className="h-5 w-5 text-black" />
                </div>
                <span className="font-bold text-lg tracking-tight text-white">
                    Venture
                </span>
            </div>

            {/* Separator */ }
            <div className="h-5 w-px bg-neutral-800 hidden md:block"></div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-1">
                <button className="px-3 py-1.5 rounded-md text-sm font-medium text-black bg-white">Projects</button>
            </div>
        </div>

        {/* Global Button - Highlighted & Red Border */}
        <button 
            onClick={() => navigate('/delete-account')}
            className="flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-red-600 bg-red-600/10 text-red-500 font-bold text-sm tracking-wide hover:bg-red-600 hover:text-white transition-all shadow-lg hover:shadow-red-600/40 active:scale-95 group"
        >
            <Trash2 className="h-5 w-5 group-hover:animate-pulse" />
            <span>DELETE DATA</span>
        </button>
      </nav>

      {/* 🚀 Main Content */}
      <main className="relative z-10 pt-32 px-6 pb-12 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Dashboard</h1>
                <p className="text-neutral-500">Manage your applications and legal compliance.</p>
            </div>
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-neutral-600 group-focus-within:text-white transition-colors" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search apps..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all shadow-inner"
                />
            </div>
        </div>

        {/* 📱 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* MEMORIES APP CARD - Monochrome */}
            <div className="group relative bg-[#050505] rounded-xl border border-neutral-900 hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
                
                <div className="p-6">
                    {/* Header: Icon + Meta */}
                    <div className="flex items-start justify-between mb-8">
                        <div className="h-16 w-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-1 group-hover:border-neutral-700 transition-colors">
                            <div className="h-full w-full rounded-xl bg-gradient-to-br from-black to-neutral-800 flex items-center justify-center border border-white/5">
                                <Camera className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="px-2.5 py-1 rounded-full bg-white/10 border border-white/5 text-[10px] font-bold text-white uppercase tracking-wide">
                                Live
                             </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors">Memories</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-8 h-10 line-clamp-2">
                            Secure personal media vault. Verify your Play Console legal data here.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-neutral-900 mb-6 group-hover:bg-neutral-800 transition-colors" />

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => navigate('/memories/privacy-policy')}
                            className="flex items-center justify-center gap-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 py-3 text-xs font-semibold text-neutral-400 hover:text-white transition-all"
                        >
                            <Shield className="h-3.5 w-3.5" />
                            Privacy
                        </button>
                        <button 
                            onClick={() => navigate('/memories/terms-conditions')}
                            className="flex items-center justify-center gap-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 py-3 text-xs font-semibold text-neutral-400 hover:text-white transition-all"
                        >
                            <FileText className="h-3.5 w-3.5" />
                            Terms
                        </button>
                    </div>
                </div>
            </div>

            {/* Placeholder Removed as requested */}

        </div>

        {/* Footer info */}
        <div className="mt-20 border-t border-neutral-900 pt-8 flex justify-between items-center text-neutral-600 text-xs font-medium">
            <p>© 2026 Venture Console. </p>
            <div className="flex gap-4">
                <span>V2.1</span>
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div> Stable</span>
            </div>
        </div>

      </main>
    </div>
  );
};

export default Home;
