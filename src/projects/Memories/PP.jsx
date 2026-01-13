import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-white hover:text-purple-200 transition-colors">
                {title}
            </h2>
            <div className="text-base leading-8 text-gray-400 font-light space-y-4">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 relative">
            
            {/* Fixed Cosmos Background */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-purple-900/10 blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-indigo-900/10 blur-[120px] mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-900/5 blur-[100px] mix-blend-screen" />
            </div>

            {/* Main Content Container - No Fixed Headers */}
            <div className="relative z-10 mx-auto max-w-3xl px-6 py-12">
                
                {/* Navigation */}
                <div className="mb-12 flex items-center justify-between">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 rounded-full bg-white/5 pr-5 pl-4 py-2.5 hover:bg-white/10 transition-all border border-white/5 active:scale-95"
                    >
                        <ArrowLeft className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Back</span>
                    </button>
                    <span className="text-sm font-medium text-neutral-600 tracking-widest uppercase">Memories App</span>
                </div>

                {/* Title Section */}
                <div className="mb-16 border-b border-white/10 pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-purple-400 text-sm tracking-wide uppercase font-medium">
                        Last Updated: January 13, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Introduction">
                        <p>Welcome to Memories. Your privacy is paramount to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. By using the app, you consent to the data practices described in this policy.</p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-bold text-white block mb-2 text-sm uppercase tracking-wide opacity-80">Account Data</span>
                                <span>When you facilitate account creation (e.g., via Google Sign-In), we collect your email address and basic profile information to authenticate you and manage your account.</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-bold text-white block mb-2 text-sm uppercase tracking-wide opacity-80">User Content</span>
                                <span>We collect the photos and text notes that you explicitly create or upload to the app ("Memories"). This content is securely stored to provide the app's core functionality.</span>
                            </div>
                        </div>
                    </Section>

                    <Section title="3. App Permissions">
                        <p className="mb-4">To provide our core features, we request access to the following device permissions:</p>
                        <ul className="space-y-3 list-none pl-0">
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                                <span><strong className="text-white">Camera:</strong> To capture photos for your memories.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                                <span><strong className="text-white">Photo Library:</strong> To allow you to select and upload existing photos/videos.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                                <span><strong className="text-white">Notifications:</strong> To send you optional reminders to capture your day or revisit past memories.</span>
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. How We Use Your Information">
                        <p className="mb-4">We use the collected information for the following purposes:</p>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="p-3 rounded-lg bg-white/5 text-sm flex items-center gap-3">
                                <div className="h-1 w-1 bg-green-400 rounded-full" />
                                To capture, store, and display your personal memories.
                            </li>
                            <li className="p-3 rounded-lg bg-white/5 text-sm flex items-center gap-3">
                                <div className="h-1 w-1 bg-green-400 rounded-full" />
                                To manage your account and subscription status.
                            </li>
                            <li className="p-3 rounded-lg bg-white/5 text-sm flex items-center gap-3">
                                <div className="h-1 w-1 bg-green-400 rounded-full" />
                                To improve app functionality and user experience.
                            </li>
                            <li className="p-3 rounded-lg bg-white/5 text-sm flex items-center gap-3">
                                <div className="h-1 w-1 bg-green-400 rounded-full" />
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
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:pratikdabhade66344@gmail.com" className="text-white underline hover:no-underline underline-offset-4 decoration-neutral-600">pratikdabhade66344@gmail.com</a>.</p>
                    </Section>
                </div>

                <div className="mt-20 border-t border-white/10 pt-10 text-center">
                   <p className="text-xs text-neutral-600 uppercase tracking-widest">© 2026 Memories Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
