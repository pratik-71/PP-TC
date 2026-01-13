import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-white hover:text-gray-200 transition-colors">
                {title}
            </h2>
            <div className="text-base leading-8 text-neutral-400 font-light space-y-4">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white">
            
            {/* Navigation Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
                <div className="mx-auto flex h-20 max-w-3xl items-center px-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 rounded-full px-4 py-2 hover:bg-white/5 transition-all duration-300"
                    >
                        <ArrowLeft className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Back</span>
                    </button>
                    <span className="ml-4 text-sm font-medium text-neutral-600">|</span>
                    <span className="ml-4 text-sm font-semibold text-white tracking-wide">Memories</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
                
                {/* Title Section */}
                <div className="mb-16 border-b border-white/10 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-neutral-500 text-sm tracking-wide uppercase font-medium">
                        Last Updated: January 13, 2026
                    </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Introduction">
                        <p>Welcome to Memories. Your privacy is paramount to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. By using the app, you consent to the data practices described in this policy.</p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold text-white block mb-1">Account Data:</span>
                                <span>When you facilitate account creation (e.g., via Google Sign-In), we collect your email address and basic profile information to authenticate you and manage your account.</span>
                            </div>
                            <div>
                                <span className="font-bold text-white block mb-1">User Content:</span>
                                <span>We collect the photos and text notes that you explicitly create or upload to the app ("Memories"). This content is securely stored to provide the app's core functionality.</span>
                            </div>
                        </div>
                    </Section>

                    <Section title="3. App Permissions">
                        <p className="mb-4">To provide our core features, we request access to the following device permissions:</p>
                        <ul className="space-y-4 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span><strong className="text-white">Camera:</strong> To capture photos for your memories.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span><strong className="text-white">Photo Library:</strong> To allow you to select and upload existing photos/videos.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span><strong className="text-white">Notifications:</strong> To send you optional reminders to capture your day or revisit past memories.</span>
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. How We Use Your Information">
                        <p className="mb-4">We use the collected information for the following purposes:</p>
                        <ul className="space-y-2 list-none pl-0">
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span>To capture, store, and display your personal memories.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span>To manage your account and subscription status.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span>To improve app functionality and user experience.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-neutral-600">•</span>
                                <span>To communicate with you regarding updates or support.</span>
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
