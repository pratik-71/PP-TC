import React from 'react';
import { ArrowLeft, Shield, Info, Check, ScanFace } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-12 group">
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-6 flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-blue-600 transition-colors"></span>
                {title}
            </h2>
            <div className="text-sm font-mono leading-relaxed text-neutral-600 space-y-4 pl-4 border-l border-black/10 group-hover:border-blue-500/30 transition-colors">
                {children}
            </div>
        </div>
    );

    const Bold = ({ children }) => (
        <strong className="text-black font-bold uppercase text-xs tracking-wider">{children}</strong>
    );

    return (
        <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
            
            {/* 📐 Technical Background Grid */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-0 right-0 bottom-0 w-[5vw] bg-blue-500/5 hidden xl:block border-l border-blue-500/10"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:pl-[100px] lg:pr-[15vw]">
                
                {/* Navigation */}
                <div className="mb-16 flex items-center justify-between border-b border-black/10 pb-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-3 px-4 py-2 bg-white border border-black/10 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Return</span>
                    </button>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Project ID</span>
                        <span className="text-sm font-bold uppercase tracking-tight text-blue-600">Maxxed App</span>
                    </div>
                </div>

                {/* Title Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-[10px] font-mono font-bold bg-blue-100 px-1 py-0.5 text-blue-800 uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tighter uppercase mb-2">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated: January 12, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Introduction">
                        <p>Welcome to LookMaxx ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application.</p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <p className="mb-4">We collect information that you voluntarily provide to us when you register on the Application, specifically:</p>
                        <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3 p-4 bg-white/50 border border-black/5 hover:border-blue-200 transition-all">
                                <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <Bold>Personal Data</Bold>
                                    <p className="mt-1">Name, email address, and profile information you provide during registration via Google or Apple Sign-In.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-white/50 border border-black/5 hover:border-blue-200 transition-all">
                                <ScanFace className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <Bold>Facial Data</Bold>
                                    <p className="mt-1">Images of your face that you upload or capture for analysis. We explicitly do NOT store raw facial data permanently on our servers. Images are processed transiently for analysis and then discarded or stored securely only if you explicitly save them to your progress journal.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-white/50 border border-black/5 hover:border-blue-200 transition-all">
                                <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <Bold>Usage Data</Bold>
                                    <p className="mt-1">Information about how you use our app, including scan frequency and feature usage, to improve our services.</p>
                                </div>
                            </li>
                        </ul>
                    </Section>

                    <Section title="3. Use of Your Information">
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-700 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Provide and manage your account.
                            </li>
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-700 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Generate facial analysis reports using AI.
                            </li>
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-700 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Process subscription payments via RevenueCat.
                            </li>
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-blue-500 hover:text-blue-700 transition-colors group/item">
                                <div className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                                Improve app performance and UX.
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. Disclosure of Your Information">
                        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our application (such as Google for AI analysis, Supabase for database hosting, and RevenueCat for payments), so long as those parties agree to keep this information confidential.</p>
                    </Section>

                    <Section title="5. Data Security">
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                    </Section>

                    <Section title="6. Policy for Children">
                        <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
                    </Section>

                    <Section title="7. Contact Us">
                        <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@lookmaxx.app" className="text-blue-600 font-bold hover:text-blue-800 underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600">support@lookmaxx.app</a></p>
                    </Section>
                </div>

                <div className="mt-24 border-t border-black/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">© 2026 LookMaxx Inc. All rights reserved.</p>
                   <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">End of Document</p>
                </div>
            </div>
        </div>
    );
}
