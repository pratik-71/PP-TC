import React, { useState } from 'react';
import { ArrowLeft, Trash2, Mail, User, AppWindow, AlertTriangle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    project: 'Memories',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email body
    const recipients = "pratikdabhade66344@gmail.com";
    const subject = `Deletion Request: ${formData.project}`;
    const body = `PROJECT: ${formData.project}
USERNAME: ${formData.username}
EMAIL: ${formData.email}
REASON: ${formData.reason}

Please confirm deletion.`;

    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-red-500/30 flex items-center justify-center p-4">
      
      {/* Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-red-900/10 blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/10 blur-[100px] mix-blend-screen" />
      </div>

      {/* Compact Card */}
      <div className="relative z-10 w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => navigate('/')}
                    className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 text-gray-400" />
                </button>
                <h1 className="text-lg font-bold text-white flex items-center gap-2">
                    <Trash2 className="h-4 w-4 text-red-500" />
                    Delete Account
                </h1>
            </div>
            <div className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-400 uppercase tracking-widest">
                Action Required
            </div>
        </div>

        {/* Scrollable Form Area */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
            <p className="text-sm text-gray-500 mb-6">
                Complete this form to request permanent deletion of your account and associated data. This cannot be undone.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Project Select */}
                <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Project</label>
                    <div className="relative">
                        <AppWindow className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <select 
                            name="project"
                            value={formData.project}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all appearance-none"
                        >
                            <option value="Memories">Memories App</option>
                        </select>
                    </div>
                </div>

                {/* Email & Username Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <input 
                                type="email" 
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@email.com"
                                className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-700 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <input 
                                type="text" 
                                name="username"
                                required
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="@username"
                                className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-700 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Reason */}
                <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Reason (Optional)</label>
                    <textarea 
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Briefly explain why..."
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-700 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all resize-none"
                    />
                </div>

                {/* Warning Box */}
                <div className="flex gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-lg">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                    <p className="text-xs text-red-200/80 leading-relaxed">
                        By submitting this request, you confirm that you want to permanently delete your account. This action is irreversible.
                    </p>
                </div>
                
                <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-3 rounded-lg shadow-lg shadow-red-500/20 transition-all active:scale-[0.98]"
                >
                    <Send className="h-4 w-4" />
                    Send Deletion Request
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
