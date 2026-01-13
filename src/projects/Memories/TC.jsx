import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsConditions() {
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
                        Terms & Conditions
                    </h1>
                    <p className="text-neutral-500 text-sm tracking-wide uppercase font-medium">
                        Last Updated: January 13, 2026
                    </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Section title="1. Agreement to Terms">
                        <p>By downloading, accessing, or using the Memories application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the application.</p>
                    </Section>

                    <Section title="2. User Accounts">
                        <p>To access certain features, you may need to register an account. You are responsible for maintaining the confidentiality of your account credentials (e.g., Google Sign-In) and are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
                    </Section>

                    <Section title="3. User Content and Conduct">
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold text-white block mb-1">Ownership:</span>
                                <span>You retain all rights to the photos, videos, and text ("Content") you upload. By uploading content, you grant Memories a license to store and display this content solely for the purpose of providing the service to you.</span>
                            </div>
                            <div>
                                <span className="font-bold text-white block mb-1">Prohibited Conduct:</span>
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
