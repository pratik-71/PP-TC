import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-purple-500/30 relative">
      
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen" />
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-12">
        
        {/* Navigation - Part of the flow */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 pr-4 pl-3 py-2.5 hover:bg-white/10 transition-all border border-white/5 active:scale-95"
          >
            <ArrowLeft className="h-4 w-4 text-white/70 group-hover:text-white" />
            <span className="text-sm font-medium text-white/70 group-hover:text-white">Back</span>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-12">
           
           <div className="border-b border-white/10 pb-8">
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
             <p className="text-purple-400 text-sm font-medium uppercase tracking-wider">Last updated: August 24, 2024</p>
           </div>

           <div className="space-y-10 text-lg leading-relaxed text-gray-400/90 font-light">
               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                 <p>
                   Welcome to <strong>Memories</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application.
                 </p>
               </section>

               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h3>
                 <p className="mb-4">
                   We may collect information about you in a variety of ways. The information we may collect on the Application includes:
                 </p>
                 <ul className="list-disc pl-5 space-y-3 marker:text-purple-500">
                    <li><strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Application.</li>
                    <li><strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Application.</li>
                    <li><strong className="text-white">Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, microphone, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">3. Use of Your Information</h3>
                 <p>
                   Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Application to:
                 </p>
                 <ul className="list-disc pl-5 mt-4 space-y-3 marker:text-purple-500">
                   <li>Create and manage your account.</li>
                   <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                   <li>Email you regarding your account or order.</li>
                   <li>Enable user-to-user communications.</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">4. Disclosure of Your Information</h3>
                 <p>
                   We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers, Marketing Communications, etc.
                 </p>
               </section>
               
               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">5. Contact Us</h3>
                 <p>
                   If you have questions or comments about this Privacy Policy, please contact us at:
                 </p>
                 <p className="mt-4 text-purple-400 font-medium hover:text-purple-300 transition-colors">pratikdabhade66344.com</p>
               </section>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
