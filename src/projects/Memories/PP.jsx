import React from 'react';
import { ArrowLeft, Shield, Check, Info } from 'lucide-react';
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

    return (
        <div className="min-h-screen bg-[#DCEEEF] text-[#1A1A1A] font-sans selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
            
            {/* 📐 Technical Background Grid */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-0 right-0 bottom-0 w-[5vw] bg-black/5 hidden xl:block border-l border-black/5"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:pl-[100px] lg:pr-[15vw]">
                
                {/* Navigation */}
                <div className="mb-16 flex items-center justify-between border-b border-black/10 pb-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-3 px-4 py-2 bg-white border border-black/10 hover:bg-black hover:text-[#D9FF00] transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Return</span>
                    </button>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Project ID</span>
                        <span className="text-sm font-bold uppercase tracking-tight">Memories App</span>
                    </div>
                </div>

                {/* Title Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-4 w-4 text-black" />
                        <span className="text-[10px] font-mono font-bold bg-[#D9FF00] px-1 py-0.5 text-black uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tighter uppercase mb-2">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-neutral-500 text-xs uppercase tracking-widest">
                        Last Updated: January 13, 2026 // Revision 2.4
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Introduction">
                        <p>Welcome to Memories. Your privacy is paramount to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. By using the app, you consent to the data practices described in this policy.</p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <div className="space-y-4">
                            <div className="p-6 bg-white border border-black/5 hover:border-black/20 transition-all">
                                <span className="font-bold text-black block mb-2 text-xs uppercase tracking-widest flex items-center gap-2">
                                     <Info className="h-3 w-3" /> Account Data
                                </span>
                                <span>When you facilitate account creation (e.g., via Google Sign-In), we collect your email address and basic profile information to authenticate you and manage your account.</span>
                            </div>
                            <div className="p-6 bg-white border border-black/5 hover:border-black/20 transition-all">
                                <span className="font-bold text-black block mb-2 text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Info className="h-3 w-3" /> User Content
                                </span>
                                <span>We collect the photos and text notes that you explicitly create or upload to the app ("Memories"). This content is securely stored to provide the app's core functionality.</span>
                            </div>
                        </div>
                    </Section>

                    <Section title="3. App Permissions">
                        <p className="mb-4">To provide our core features, we request access to the following device permissions:</p>
                        <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5">
                                <div className="mt-1 h-3 w-3 bg-green-500 rounded-full shrink-0 animate-pulse" />
                                <span><strong className="text-black uppercase text-xs tracking-wider">Camera:</strong> To capture photos for your memories.</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5">
                                <div className="mt-1 h-3 w-3 bg-green-500 rounded-full shrink-0 animate-pulse" />
                                <span><strong className="text-black uppercase text-xs tracking-wider">Photo Library:</strong> To allow you to select and upload existing photos/videos.</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white/50 border border-black/5">
                                <div className="mt-1 h-3 w-3 bg-green-500 rounded-full shrink-0 animate-pulse" />
                                <span><strong className="text-black uppercase text-xs tracking-wider">Notifications:</strong> To send you optional reminders to capture your day or revisit past memories.</span>
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. How We Use Your Information">
                        <p className="mb-4">We use the collected information for the following purposes:</p>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-black transition-colors">
                                <Check className="h-4 w-4 text-green-600" />
                                To capture, store, and display your personal memories.
                            </li>
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-black transition-colors">
                                <Check className="h-4 w-4 text-green-600" />
                                To manage your account and subscription status.
                            </li>
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-black transition-colors">
                                <Check className="h-4 w-4 text-green-600" />
                                To improve app functionality and user experience.
                            </li>
                            <li className="p-4 bg-white border border-black/5 text-xs flex items-center gap-3 hover:border-black transition-colors">
                                <Check className="h-4 w-4 text-green-600" />
                                To communicate with you regarding updates or support.
                            </li>
                        </ul>
                    </Section>

                    <Section title="5. Data Storage and Security">
                        <p>Your personal data and media are securely stored using Supabase, a scalable and secure backend service. We implement appropriate technical and security measures to protect your data from unauthorized access. However, no method of transmission over the internet is 100% secure.</p>
                    </Section>

                    <Section title="6. Subscriptions and Payments">
                        <p>We offer premium features through subscriptions. Payments are processed securely via third-party providers (Apple App Store / Google Play Store / RevenueCat). We do not store or process your payment card details directly.</p>
                    </Section>

                    <Section title="7. Data Retention & Deletion">
                        <p>We retain your data only as long as your account is active. You have the right to request the deletion of your account and all associated data at any time through the app settings or by contacting support. Upon deletion, your data is permanently removed from our servers.</p>
                    </Section>

                    <Section title="8. Third-Party Services">
                        <p>We may use third-party services (such as Google for authentication and RevenueCat for payments) that have their own Privacy Policies. We encourage you to review them.</p>
                    </Section>

                    <Section title="9. Contact Us">
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:pratikdabhade66344@gmail.com" className="text-black font-bold hover:text-blue-600 underline underline-offset-4 decoration-black/20 hover:decoration-blue-600">pratikdabhade66344@gmail.com</a>.</p>
                    </Section>
                </div>

                <div className="mt-24 border-t border-black/10 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-50 hover:opacity-100 transition-opacity">
                   <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">© 2026 Memories Inc. All rights reserved.</p>
                   <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">End of Document</p>
                </div>
            </div>
        </div>
    );
}
