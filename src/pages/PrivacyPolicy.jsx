import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-purple-500/30">
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-2xl items-center px-6">
          <button 
            onClick={() => navigate('/')}
            className="mr-4 -ml-2 rounded-full p-2 hover:bg-white/10 transition-colors text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-bold text-white tracking-wide">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-6 pt-28 pb-20">
        <div className="space-y-10">
           
           <div className="border-b border-white/5 pb-8">
             <h2 className="text-3xl font-bold text-white mb-2">Privacy Policy for Memories</h2>
             <p className="text-sm text-gray-500">Last updated: August 24, 2024</p>
           </div>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">1. Introduction</h3>
             <p className="leading-relaxed text-gray-400">
               Welcome to <strong>Memories</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application.
             </p>
           </section>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h3>
             <p className="leading-relaxed text-gray-400 mb-4">
               We may collect information about you in a variety of ways. The information we may collect on the Application includes:
             </p>
             <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Application.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Application.</li>
                <li><strong>Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, microphone, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
             </ul>
           </section>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">3. Use of Your Information</h3>
             <p className="leading-relaxed text-gray-400">
               Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Application to:
             </p>
             <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
               <li>Create and manage your account.</li>
               <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
               <li>Email you regarding your account or order.</li>
               <li>Enable user-to-user communications.</li>
             </ul>
           </section>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">4. Disclosure of Your Information</h3>
             <p className="leading-relaxed text-gray-400">
               We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers, Marketing Communications, etc.
             </p>
           </section>
           
           <section>
             <h3 className="text-xl font-semibold text-white mb-4">5. Contact Us</h3>
             <p className="leading-relaxed text-gray-400">
               If you have questions or comments about this Privacy Policy, please contact us at:
             </p>
             <p className="mt-4 text-purple-400 font-medium">support@memories-app.com</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
