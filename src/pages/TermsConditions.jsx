import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-blue-500/30">
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-2xl items-center px-6">
          <button 
            onClick={() => navigate('/')}
            className="mr-4 -ml-2 rounded-full p-2 hover:bg-white/10 transition-colors text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-bold text-white tracking-wide">Terms & Conditions</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-6 pt-28 pb-20">
        <div className="space-y-10">
           
           <div className="border-b border-white/5 pb-8">
             <h2 className="text-3xl font-bold text-white mb-2">Terms and Conditions</h2>
             <p className="text-sm text-gray-500">Last updated: August 24, 2024</p>
           </div>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h3>
             <p className="leading-relaxed text-gray-400">
               These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Memories</strong> ("we," "us" or "our"), concerning your access to and use of the Memories application. You agree that by accessing the Application, you have read, understood, and agree to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.
             </p>
           </section>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">2. Intellectual Property Rights</h3>
             <p className="leading-relaxed text-gray-400">
               Unless otherwise indicated, the Application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
             </p>
           </section>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">3. User Representations</h3>
             <p className="leading-relaxed text-gray-400 mb-4">
               By using the Application, you represent and warrant that:
             </p>
             <ul className="list-disc pl-5 space-y-2 text-gray-400">
               <li>All registration information you submit will be true, accurate, current, and complete.</li>
               <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
               <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
               <li>You are not a minor in the jurisdiction in which you reside.</li>
             </ul>
           </section>

           <section>
             <h3 className="text-xl font-semibold text-white mb-4">4. Prohibited Activities</h3>
             <p className="leading-relaxed text-gray-400">
               You may not access or use the Application for any purpose other than that for which we make the Application available. The Application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
             </p>
           </section>
           
           <section>
             <h3 className="text-xl font-semibold text-white mb-4">5. Contact Us</h3>
             <p className="leading-relaxed text-gray-400">
               In order to resolve a complaint regarding the Application or to receive further information regarding use of the Application, please contact us at:
             </p>
             <p className="mt-4 text-blue-400 font-medium">pratikdabhade66344.com</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
