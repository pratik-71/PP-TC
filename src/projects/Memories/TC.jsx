import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsConditions() {
    const navigate = useNavigate();

    const Section = ({ title, children }) => (
        <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-white hover:text-blue-200 transition-colors">
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
                        Terms & Conditions
                    </h1>
                    <p className="text-blue-400 text-sm tracking-wide uppercase font-medium">
                        Last Updated: January 13, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Agreement to Terms">
                        <p>By downloading, accessing, or using the Memories application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the application.</p>
                    </Section>

                    <Section title="2. User Accounts">
                        <p>To access certain features, you may need to register an account. You are responsible for maintaining the confidentiality of your account credentials (e.g., Google Sign-In) and are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
                    </Section>

                    <Section title="3. User Content and Conduct">
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-bold text-white block mb-2 text-sm uppercase tracking-wide opacity-80">Ownership</span>
                                <span>You retain all rights to the photos, videos, and text ("Content") you upload. By uploading content, you grant Memories a license to store and display this content solely for the purpose of providing the service to you.</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-bold text-white block mb-2 text-sm uppercase tracking-wide opacity-80">Prohibited Conduct</span>
                                <span>You agree not to upload any content that is illegal, offensive, pornographic, violent, or violates the rights of others. We reserve the right to remove any content or terminate accounts that violate these guidelines.</span>
                            </div>
                        </div>
                    </Section>

                    <Section title="4. Subscriptions and Purchasing">
                        <p>The app may offer auto-renewing subscriptions to access premium features. Subscription payments are charged to your App Store / Play Store account securely. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period. You can manage your subscriptions in your device account settings.</p>
                    </Section>

                    <Section title="5. Intellectual Property">
                        <p>The Memories app, including its design, code, graphics, and logos (excluding user-generated content), is the intellectual property of our company and is protected by copyright laws. You are granted a limited license to use the app for personal, non-commercial purposes.</p>
                    </Section>

                    <Section title="6. Disclaimer of Warranties">
                        <p>The service is provided on an "as-is" and "as-available" basis. We do not warrant that the app will be error-free, uninterrupted, or perfectly secure, though we strive to maintain high standards of quality and security.</p>
                    </Section>

                    <Section title="7. Limitation of Liability">
                        <p>To the fullest extent permitted by law, Memories and its creators shall not be liable for any indirect, incidental, or consequential damages arising arising from your use of the service or any loss of data.</p>
                    </Section>

                    <Section title="8. Changes to Terms">
                        <p>We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the app constitutes acceptance of the new terms.</p>
                    </Section>

                    <Section title="9. Contact Information">
                        <p>For any questions regarding these Terms, please contact us at <a href="mailto:support@venturememories.com" className="text-white underline hover:no-underline underline-offset-4 decoration-neutral-600">support@venturememories.com</a>.</p>
                    </Section>
                </div>

                <div className="mt-20 border-t border-white/10 pt-10 text-center">
                   <p className="text-xs text-neutral-600 uppercase tracking-widest">© 2026 Memories Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
