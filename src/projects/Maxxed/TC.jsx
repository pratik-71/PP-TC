import React from 'react';
import { ArrowLeft, FileText, Check, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsConditions() {
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
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span className="text-[10px] font-mono font-bold bg-blue-100 px-1 py-0.5 text-blue-800 uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tighter uppercase mb-2">
                        Terms of Service
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated: January 12, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Agreement to Terms">
                        <p>By accessing or using the LookMaxx application, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.</p>
                    </Section>

                    <Section title="2. Description of Service">
                        <p>LookMaxx provides AI-powered facial analysis and self-improvement recommendations. The analysis provided is for entertainment and self-improvement purposes only and should not be considered medical advice.</p>
                    </Section>

                    <Section title="3. User Accounts">
                        <p>When you create an account with us, you safeguard your account and password and accept responsibility for all activities that occur under your account. You represent that you are of legal age to form a binding contract.</p>
                    </Section>

                    <Section title="4. Subscriptions and Payments">
                         <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3 p-4 bg-white/50 border border-black/5 hover:border-blue-200 transition-all">
                                <Check className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div><Bold>Free Scans</Bold> <span className="block mt-1">Users may receive free scans through referrals or initial sign-up offers.</span></div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-white/50 border border-black/5 hover:border-blue-200 transition-all">
                                <Check className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div><Bold>Pro Subscription</Bold> <span className="block mt-1">Premium features are available via a monthly or annual subscription. Payment will be charged to your iTunes or Google Play Account at confirmation of purchase.</span></div>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-white/50 border border-black/5 hover:border-blue-200 transition-all">
                                <Check className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                                <div><Bold>Renewal</Bold> <span className="block mt-1">Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.</span></div>
                            </li>
                        </ul>
                    </Section>

                    <Section title="5. Prohibited Activities">
                        <div className="p-4 bg-red-500/5 border border-red-500/10 flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                            <p className="text-xs text-red-800 leading-relaxed">You may not use the application to upload content that is illegal, offensive, looking to harass others, or infringes on the intellectual property rights of others. We reserve the right to terminate accounts that violate these rules.</p>
                        </div>
                    </Section>

                    <Section title="6. Disclaimer of Warranties">
                        <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee that the results of the facial analysis will be 100% accurate or scientifically proven.</p>
                    </Section>

                    <Section title="7. Limitation of Liability">
                        <p>In no event shall LookMaxx, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
                    </Section>

                    <Section title="8. Changes to Terms">
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </Section>

                    <Section title="9. Contact Us">
                        <p>If you have any questions about these Terms, please contact us at: <a href="mailto:support@lookmaxx.app" className="text-blue-600 font-bold hover:text-blue-800 underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600">support@lookmaxx.app</a></p>
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
