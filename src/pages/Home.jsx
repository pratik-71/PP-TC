import React, { useState } from 'react';
import { Search, Shield, FileText, Component, Trash2, Grid, CornerRightDown, Share2, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
      
      {/* 📐 Technical Background Grid */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          {/* Crosshairs */}
          <div className="absolute top-10 left-10 w-4 h-4 border-l border-t border-black/40" />
          <div className="absolute top-10 right-10 w-4 h-4 border-r border-t border-black/40" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-l border-b border-black/40" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-r border-b border-black/40" />
          
          {/* Vertical Ruler Line */}
          <div className="absolute left-[80px] top-0 bottom-0 w-px bg-black/5 hidden md:block"></div>
          
          {/* Neon Side Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-[8vw] bg-[#D9FF00] hidden lg:block border-l border-black/10"></div>
      </div>

      {/* 🧭 Navbar - Technical/Brutalist */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-black/10 bg-[#DCEEEF]/90 backdrop-blur-sm">
        <div className="flex items-center gap-6 pl-0 md:pl-20">
            <div className="flex items-center gap-3 group">
                <div className="h-8 w-8 bg-black flex items-center justify-center text-[#ccff00] font-mono text-xs font-bold border border-black group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                    ZN
                </div>
                <div>
                   <span className="font-bold text-lg tracking-tighter uppercase block leading-none">Zenvy</span>
                   <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none">Console V2.1</span>
                </div>
            </div>
        </div>

        <button 
            onClick={() => navigate('/delete-account')}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-transparent border border-red-500/30 text-red-600 hover:bg-red-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
        >
            <Trash2 className="h-3 w-3" />
            <span>Terminate Data</span>
        </button>
      </nav>

      {/* 🚀 Main Content */}
      <main className="relative z-10 pt-32 px-6 pb-12 max-w-7xl mx-auto md:pl-[100px] lg:pr-[10vw]">
        
        {/* Header HUD */}
        <div className="mb-16 relative">
            <div className="absolute -left-6 top-2 w-3 h-3 bg-black/20 rounded-full" />
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-black/10 pb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-1.5 py-0.5 bg-black text-white text-[10px] uppercase font-mono tracking-widest">Sys: Admin</span>
                        <div className="h-px w-12 bg-black/20" />
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold text-black tracking-tighter uppercase mb-4 leading-[0.9]">
                        DashBoard
                    </h1>
                </div>
                
                {/* Search Input - Technical */}
                <div className="w-full md:w-80">
                    <div className="relative group">
                        <div className="absolute -top-3 left-0 text-[9px] font-mono text-neutral-400 uppercase tracking-widest group-focus-within:text-black transition-colors">Search_Query</div>
                        <input 
                            type="text" 
                            placeholder="ENTER KEYWORD..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-b-2 border-black/10 py-2 pr-8 text-black font-mono text-sm placeholder-black/30 focus:outline-none focus:border-black transition-all uppercase"
                        />
                        <Search className="absolute right-0 bottom-2 h-4 w-4 text-black/30" />
                    </div>
                </div>
            </div>
        </div>

        {/* 📱 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD 01: MEMORIES */}
            <div className="group relative bg-[#DCEEEF] border border-black/10 hover:border-black transition-all duration-300">
                {/* Hover Effect: Technical Overlay */}
                <div className="absolute inset-0 bg-[#D9FF00]/0 group-hover:bg-[#D9FF00]/5 transition-colors z-0 pointer-events-none" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 p-8 flex flex-col h-full">
                    {/* Header Icon - Removed Text ID */}
                    <div className="flex justify-between items-start mb-8 border-b border-dashed border-black/10 pb-4">
                        <div className="h-8 w-8 bg-neutral-200 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
                            <Grid className="h-4 w-4" />
                        </div>
                    </div>

                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-2 group-hover:text-black">Memories</h3>
                    <p className="text-sm font-mono text-neutral-600 mb-8 border-l-2 border-[#D9FF00] pl-3 leading-relaxed">
                        Secure personal media vault and journal application.
                    </p>

                    <div className="mt-auto grid grid-cols-2 gap-4 border-t border-black/5 pt-6">
                        <button 
                             onClick={() => navigate('/memories/privacy-policy')}
                             className="flex items-center justify-between px-3 py-2 bg-white/50 border border-black/5 hover:border-black/50 hover:bg-white transition-all text-xs font-bold uppercase tracking-wider group/btn"
                        >
                            <span>Privacy</span>
                            <CornerRightDown className="h-3 w-3 opacity-30 group-hover/btn:opacity-100" />
                        </button>
                        <button 
                             onClick={() => navigate('/memories/terms-conditions')}
                             className="flex items-center justify-between px-3 py-2 bg-white/50 border border-black/5 hover:border-black/50 hover:bg-white transition-all text-xs font-bold uppercase tracking-wider group/btn"
                        >
                            <span>Terms</span>
                            <CornerRightDown className="h-3 w-3 opacity-30 group-hover/btn:opacity-100" />
                        </button>
                    </div>
                </div>
            </div>

            {/* CARD 02: MAXXED */}
            <div className="group relative bg-[#DCEEEF] border border-black/10 hover:border-black transition-all duration-300">
                {/* Hover Effect: Technical Overlay */}
                <div className="absolute inset-0 bg-[#D9FF00]/0 group-hover:bg-[#D9FF00]/5 transition-colors z-0 pointer-events-none" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-20 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 p-8 flex flex-col h-full">
                     {/* Header Icon - Removed Text ID */}
                     <div className="flex justify-between items-start mb-8 border-b border-dashed border-black/10 pb-4">
                        <div className="h-8 w-8 bg-neutral-200 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center">
                            <Component className="h-4 w-4" />
                        </div>
                    </div>

                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">Maxxed</h3>
                    <p className="text-sm font-mono text-neutral-600 mb-8 border-l-2 border-blue-500 pl-3 leading-relaxed">
                        AI-powered facial analysis and optimization tool.
                    </p>

                    <div className="mt-auto grid grid-cols-2 gap-4 border-t border-black/5 pt-6">
                        <button 
                             onClick={() => navigate('/maxxed/privacy-policy')}
                             className="flex items-center justify-between px-3 py-2 bg-white/50 border border-black/5 hover:border-blue-500 hover:bg-white transition-all text-xs font-bold uppercase tracking-wider group/btn"
                        >
                            <span>Privacy</span>
                            <CornerRightDown className="h-3 w-3 opacity-30 group-hover/btn:opacity-100" />
                        </button>
                        <button 
                             onClick={() => navigate('/maxxed/terms-conditions')}
                             className="flex items-center justify-between px-3 py-2 bg-white/50 border border-black/5 hover:border-blue-500 hover:bg-white transition-all text-xs font-bold uppercase tracking-wider group/btn"
                        >
                            <span>Terms</span>
                            <CornerRightDown className="h-3 w-3 opacity-30 group-hover/btn:opacity-100" />
                        </button>
                    </div>
                </div>
            </div>
            
        </div>

        {/* 📟 Footer Status */}
        <div className="mt-20 border-t border-black/10 pt-8 flex justify-between items-center opacity-50 font-mono text-[10px] uppercase">
             <span>Sys_Status: Stable</span>
             <span>Encrypted Connection</span>
        </div>

      </main>
    </div>
  );
};

export default Home;
