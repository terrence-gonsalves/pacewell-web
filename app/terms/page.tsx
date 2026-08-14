import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service — Pacewell',
    description: 'Terms of Service for Pacewell, the AI-powered recovery tracking app.',
};

const T = {
    green: '#2E7D52',
    greenLight: '#E8F5EE',
    dark: '#0F1A14',
    text: '#1A2E22',
    subtle: '#6B7C72',
    border: '#DDE8E2',
    bg: '#F7F8F6',
    white: '#FFFFFF',
};

const fontDisplay = "'Fraunces', Georgia, serif";
const fontSans = "'DM Sans', system-ui, sans-serif";

export default function TermsOfService() {
    return (
        <main style={{ background: T.bg, minHeight: '100vh', fontFamily: fontSans }}>
            <div style={{ background: T.dark, padding: '60px 24px 80px', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600, height: 300,
                        background: `${T.green}20`, borderRadius: '50%',
                        filter: 'blur(80px)', pointerEvents: 'none',
                    }} 
                />
                <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
                    <Link href="/" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                        fontFamily: fontSans, fontSize: 14, marginBottom: 32,
                    }}>
                        ← Back to Pacewell
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div style={{
                                width: 36, height: 36, borderRadius: 10, background: T.green,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                        >
                            <span style={{ color: 'white', fontSize: 18 }}>⚡</span>
                        </div>
                        <span style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: 'white' }}>Pacewell</span>
                    </div>
                    <h1 style={{
                            fontFamily: fontDisplay, fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 12,
                        }}
                    >
                        Terms of Service
                    </h1>
                    <p style={{ fontFamily: fontSans, fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>
                        Last updated: April 14, 2026
                    </p>
                </div>
            </div>
            
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 100px' }}>
                <div style={{
                        background: T.greenLight, borderRadius: 16, padding: 24,
                        borderLeft: `4px solid ${T.green}`, marginBottom: 48,
                    }}
                >
                    <p style={{ fontSize: 15, color: T.text, lineHeight: 1.7 }}>
                        Please read these Terms of Service carefully before using the Pacewell app or website.
                        By downloading, installing or using Pacewell, you agree to be bound by these terms.
                        If you do not agree with any part of these terms, please do not use Pacewell.
                    </p>
                </div>

                {[
                {
                    title: '1. Agreement to Terms',
                    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you and Pacewell Ltd ("we", "us" or "our"), a Canadian company, governing your use of the Pacewell mobile application and website (collectively, "the Service").

                    By creating an account or using the Service, you confirm that you are at least 18 years of age and have the legal capacity to enter into this agreement.`,
                },
                {
                    title: '2. Description of Service',
                    content: `Pacewell is a wellness tracking application designed for active adults. The Service allows you to:

                    • Complete daily health and wellness check-ins
                    • Log physical activities and workouts
                    • Connect wearable devices to sync health data
                    • Receive AI-generated wellness insights based on your data
                    • Track health trends and recovery patterns over time

                    The Service is intended for general wellness and informational purposes only.`,
                },
                {
                    title: '3. Important Health Disclaimer',
                    content: `**Pacewell is not a medical device and is not a substitute for professional medical advice, diagnosis or treatment.**

                    The insights, recommendations and information provided through Pacewell are generated by artificial intelligence and are for general wellness and informational purposes only. They should not be relied upon as medical advice.

                    Always seek the advice of a qualified healthcare professional before making any changes to your diet, exercise routine or health management. Never disregard professional medical advice or delay seeking it because of something you have read or received through Pacewell.

                    In case of a medical emergency, contact emergency services immediately.`,
                },
                {
                    title: '4. Account Registration',
                    content: `To use Pacewell you must create an account. You agree to:

                    • Provide accurate and complete information when registering
                    • Keep your account credentials secure and confidential
                    • Notify us immediately of any unauthorised access to your account
                    • Be responsible for all activity that occurs under your account

                    You may not create an account on behalf of another person without their explicit consent.`,
                },
                {
                    title: '5. Acceptable Use',
                    content: `You agree to use Pacewell only for lawful purposes and in accordance with these Terms. You agree not to:

                    • Use the Service in any way that violates applicable Canadian or international laws or regulations
                    • Attempt to gain unauthorised access to any part of the Service or its infrastructure
                    • Reverse engineer, decompile or disassemble the App
                    • Use the Service to transmit harmful, offensive or fraudulent content
                    • Impersonate any person or entity
                    • Interfere with or disrupt the integrity or performance of the Service
                    • Use automated tools to access or scrape the Service without our written permission`,
                },
                {
                    title: '6. Your Content and Data',
                    content: `You retain ownership of all health and personal data you enter into Pacewell. By using the Service, you grant Pacewell Ltd a limited, non-exclusive licence to use your data solely for the purpose of providing and improving the Service as described in our Privacy Policy.

                    You are responsible for ensuring the accuracy of information you enter into the Service. We are not responsible for any decisions you make based on inaccurate data you have provided.`,
                },
                {
                    title: '7. AI-Generated Insights',
                    content: `Pacewell uses artificial intelligence to generate personalised wellness insights. You acknowledge and agree that:

                    • AI-generated insights are not medical advice
                    • Insights are based on the data you provide and may not account for your full medical history
                    • The accuracy and relevance of insights may vary
                    • We are not liable for any actions you take based on AI-generated content
                    • AI systems can make errors and insights should be interpreted with appropriate judgment`,
                },
                {
                    title: '8. Free Service and Donations',
                    content: `Pacewell is free to download and use. We may offer an optional donation feature to support the continued development of the Service. Donations are voluntary and non-refundable.

                    We reserve the right to introduce premium features or subscription tiers in the future. Any such changes will be communicated to users in advance and existing free features will not be removed without reasonable notice.`,
                },
                {
                    title: '9. Intellectual Property',
                    content: `The Pacewell name, logo, app design, code, content and all related materials are the intellectual property of Pacewell Ltd and are protected by Canadian and international copyright, trademark and other intellectual property laws.

                    You are granted a limited, non-exclusive, non-transferable licence to use the App on your personal device for personal, non-commercial purposes. This licence does not include the right to copy, modify, distribute or create derivative works from any part of the Service.`,
                },
                {
                    title: '10. Third-Party Services',
                    content: `Pacewell integrates with third-party services including Apple HealthKit, Google Health Connect and Anthropic's Claude AI. Your use of these integrations is subject to the respective terms of service and privacy policies of those third parties.

                    We are not responsible for the availability, accuracy or conduct of any third-party services.`,
                },
                {
                    title: '11. Limitation of Liability',
                    content: `To the maximum extent permitted by applicable Canadian law, Pacewell Ltd and its directors, employees and agents shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of or inability to use the Service.

                    Our total liability to you for any claims arising from your use of the Service shall not exceed the amount you have paid to us in the twelve months preceding the claim. If you have not made any payments, our liability is limited to CAD $100.

                    Some jurisdictions do not allow the exclusion or limitation of liability for consequential damages, so the above limitation may not apply to you.`,
                },
                {
                    title: '12. Indemnification',
                    content: `You agree to indemnify and hold harmless Pacewell Ltd and its directors, employees and agents from any claims, damages, losses, liabilities, costs and expenses (including reasonable legal fees) arising from your use of the Service, your violation of these Terms or your violation of any rights of a third party.`,
                },
                {
                    title: '13. Termination',
                    content: `You may delete your account and stop using the Service at any time through the App settings.

                    We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if we believe you have violated these Terms or if continued operation poses a risk to the Service or other users.

                    Upon termination, your right to use the Service ceases immediately. Provisions of these Terms that by their nature should survive termination shall do so.`,
                },
                {
                    title: '14. Changes to Terms',
                    content: `We may update these Terms from time to time to reflect changes in the Service, applicable law or our business practices. We will notify you of material changes by sending a notification through the App or by email at least 14 days before the changes take effect.

                    Your continued use of the Service after the effective date of updated Terms constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, please stop using the Service and delete your account.`,
                },
                {
                    title: '15. Governing Law and Disputes',
                    content: `These Terms are governed by and construed in accordance with the laws of Canada and the province of Ontario, without regard to conflict of law principles.

        Any disputes arising from these Terms or your use of the Service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.

        If you are a consumer, you may also have rights under the consumer protection laws of your province of residence.`,
                },
                {
                    title: '16. Contact Us',
                    content: `If you have any questions about these Terms of Service, please contact us:

                    **Pacewell Ltd**
                    Email: legal@pacewellapp.com
                    Website: pacewellapp.com`,
                },
                ].map((section, i) => (
                <div key={i} style={{ marginBottom: 48 }}>
                    <h2 style={{
                            fontFamily: fontDisplay, fontSize: 22, fontWeight: 700,
                            color: T.dark, letterSpacing: '-0.01em', marginBottom: 16,
                            paddingBottom: 12, borderBottom: `1px solid ${T.border}`,
                        }}
                    >
                        {section.title}
                    </h2>
                    <div style={{ fontSize: 15, color: T.text, lineHeight: 1.8 }}>

                        {section.content.split('\n\n').map((paragraph, j) => (
                        <p key={j} style={{ marginBottom: 16 }}>

                            {paragraph.split('\n').map((line, k) => {
                                const trimmedLine = line.trim();
                                const isBullet = trimmedLine.startsWith('- ');
                                const displayLine = isBullet ? trimmedLine.slice(2) : trimmedLine;
                                const parts = displayLine.split(/(\*\*[^*]+\*\*)/g);

                                return (
                                    <span
                                        key={k}
                                        style={{
                                            display: 'block',
                                            position: 'relative',
                                            paddingLeft: isBullet ? 20 : 0,
                                            marginBottom: isBullet ? 6 : 0,
                                        }}
                                    >
                                        {isBullet && (
                                            <span style={{position: 'absolute', left: 5}}>•</span>
                                        )}

                                        {parts.map((part, l) =>
                                            part.startsWith('**') && part.endsWith('**')
                                                ? <strong key={l} style={{ color: T.dark, fontWeight: 600 }}>{part.slice(2, -2)}</strong>
                                                : <span key={l}>{part}</span>
                                        )}
                                    </span>
                                );
                            })}
                            
                        </p>
                        ))}

                    </div>
                </div>
                ))}
                
                <div style={{
                        paddingTop: 32, borderTop: `1px solid ${T.border}`,
                        display: 'flex', gap: 24, flexWrap: 'wrap',
                    }}
                >
                    <Link href="/" style={{ fontFamily: fontSans, fontSize: 14, color: T.green, textDecoration: 'none' }}>
                        ← Back to Home
                    </Link>
                    <Link href="/privacy" style={{ fontFamily: fontSans, fontSize: 14, color: T.green, textDecoration: 'none' }}>
                        Privacy Policy →
                    </Link>
                </div>
            </div>
        </main>
    );
}