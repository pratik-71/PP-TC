import React from 'react';
import { Search, Shield, FileText, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-hidden">
      
      {/* Cosmos Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12">
        
        {/* Header & Search */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight">
                    Venture Projects
                </h1>
            </div>
            <div className="relative w-full md:w-80 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Search universe..." 
                        className="w-full rounded-xl bg-black/40 border border-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 backdrop-blur-xl transition-all"
                    />
                </div>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Memories App Card */}
            <div className="group relative rounded-2xl bg-black/40 border border-white/10 p-1 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Card Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full rounded-xl bg-[#0A0A0A] p-5 overflow-hidden">
                    {/* Top Decor */}
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <div className="h-16 w-16 bg-purple-500/10 rounded-full blur-2xl" />
                    </div>

                    <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-lg group-hover:border-purple-500/30 transition-colors">
                            <Camera className="h-6 w-6 text-purple-300" />
                        </div>
                        <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-purple-200 border border-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                            LIVE
                        </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">Memories</h2>
                    <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2">
                        Capture, store, and relive your most precious moments in a secure, private universe.
                    </p>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                        <button 
                            onClick={() => navigate('/memories/privacy-policy')}
                            className="flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 px-3 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10 active:scale-95"
                        >
                            <Shield className="h-3.5 w-3.5" />
                            Privacy
                        </button>

                        <button 
                            onClick={() => navigate('/memories/terms-conditions')}
                            className="flex items-center justify-center gap-2 rounded-lg bg-white/5 py-2.5 px-3 text-xs font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-transparent hover:border-white/10 active:scale-95"
                        >
                            <FileText className="h-3.5 w-3.5" />
                            Terms
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
