import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
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
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Terms & Conditions</h1>
             <p className="text-purple-400 text-sm font-medium uppercase tracking-wider">Last updated: August 24, 2024</p>
           </div>

           <div className="space-y-10 text-lg leading-relaxed text-gray-400/90 font-light">
               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h3>
                 <p>
                   These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Memories</strong> ("we," "us" or "our"), concerning your access to and use of the Memories application. You agree that by accessing the Application, you have read, understood, and agree to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                 </p>
               </section>

               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">2. Intellectual Property Rights</h3>
                 <p>
                   Unless otherwise indicated, the Application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                 </p>
               </section>

               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">3. User Representations</h3>
                 <p className="mb-4">
                   By using the Application, you represent and warrant that:
                 </p>
                 <ul className="list-disc pl-5 space-y-3 marker:text-purple-500">
                   <li>All registration information you submit will be true, accurate, current, and complete.</li>
                   <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                   <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                   <li>You are not a minor in the jurisdiction in which you reside.</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">4. Prohibited Activities</h3>
                 <p>
                   You may not access or use the Application for any purpose other than that for which we make the Application available. The Application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                 </p>
               </section>
               
               <section>
                 <h3 className="text-xl font-semibold text-white mb-3">5. Contact Us</h3>
                 <p>
                   In order to resolve a complaint regarding the Application or to receive further information regarding use of the Application, please contact us at:
                 </p>
                 <p className="mt-4 text-purple-400 font-medium hover:text-purple-300 transition-colors">pratikdabhade66344.com</p>
               </section>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
