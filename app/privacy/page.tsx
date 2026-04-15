import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy — Pacewell',
    description: 'Privacy Policy for Pacewell, the AI-powered recovery tracking app.',
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

export default function PrivacyPolicy() {
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
                            transition: 'color 0.2s',
                        }}
                    >
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
                        Privacy Policy
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
                        At <strong>Pacewell Ltd</strong>, we take your privacy seriously. This Privacy Policy explains how we collect,
                        use and protect your personal information when you use the Pacewell mobile application and website.
                        By using Pacewell, you agree to the practices described in this policy.
                    </p>
                </div>

                {[
                {
                    title: '1. Who We Are',
                    content: `Pacewell Ltd is a Canadian company and the developer and operator of the Pacewell mobile application ("the App") and website at pacewellapp.com ("the Website"). References to "we", "us" or "our" in this policy refer to Pacewell Ltd. 
        
                    If you have any questions about this Privacy Policy, please contact us at privacy@pacewellapp.com.`,
                },
                {
                    title: '2. Information We Collect',
                    content: `We collect the following categories of information when you use Pacewell:

                    **Account Information**
                    When you register, we collect your email address and any profile information you provide, including your name, age and activity level.

                    **Daily Check-in Data**
                    When you complete a daily check-in, we collect the data you enter including mood, energy, stress levels, sleep quality, sleep hours, nutrition quality, water intake and any notes you choose to add.

                    **Activity Data**
                    We collect workout logs you manually enter, including activity type, duration, perceived exertion and notes.

                    **Health Metrics from Wearable Devices**
                    If you choose to connect a wearable device, we collect health data synced through Apple HealthKit (iOS) or Google Health Connect (Android), which may include step count, heart rate, sleep data, exercise sessions and body weight.

                    **Usage Data**
                    We may collect anonymised data about how you use the App, including features accessed and frequency of use, to improve the service.`,
                },
                {
                    title: '3. How We Use Your Information',
                    content: `We use the information we collect to:

                    • Provide and operate the Pacewell service
                    • Generate personalised AI-powered health insights using your check-in and wearable data
                    • Send you daily check-in reminders and bedtime insight notifications (only if you grant permission)
                    • Improve and develop new features for the App
                    • Respond to your support requests
                    • Comply with legal obligations

                    We do not use your health data for advertising purposes. We do not sell your personal information to third parties.`,
                },
                {
                    title: '4. AI-Powered Insights',
                    content: `Pacewell uses Anthropic's Claude AI to analyse your health data and generate personalised wellness insights. When generating insights, your anonymised health data is sent to Anthropic's API for processing. Anthropic's use of this data is governed by their own privacy policy and terms of service.

                    We send only the data necessary to generate your insights. We do not send personally identifiable information such as your name or email address to Anthropic.`,
                },
                {
                    title: '5. Data Storage and Security',
                    content: `Your data is stored securely using Supabase, a cloud database provider. Data is encrypted in transit using TLS and encrypted at rest. We implement industry-standard security measures to protect your personal information.

                    Pacewell servers are located in data centres that may be outside of Canada. By using the App, you consent to the transfer of your information to these servers.

                    We retain your data for as long as your account is active. If you delete your account, your personal data will be permanently deleted from our systems within 30 days.`,
                },
                {
                    title: '6. Health Data',
                    content: `Pacewell handles health and wellness data with particular care. We recognise that health data is sensitive personal information.

                    **Important:** Pacewell is not a medical device and is not intended to diagnose, treat, cure or prevent any medical condition. The insights and information provided by Pacewell are for general wellness purposes only. Always consult a qualified healthcare professional before making changes to your health or fitness routine.

                    We do not share your health data with insurers, employers or any third parties without your explicit consent.`,
                },
                {
                    title: '7. Third-Party Services',
                    content: `Pacewell uses the following third-party services which may process your data:

                    • **Supabase** — database and authentication provider
                    • **Anthropic** — AI processing for health insights
                    • **Apple HealthKit** — health data integration on iOS (optional)
                    • **Google Health Connect** — health data integration on Android (optional)
                    • **Expo / EAS** — mobile app build and delivery infrastructure

                    Each of these services has their own privacy policy governing their use of data.`,
                },
                {
                    title: '8. Your Rights Under Canadian Privacy Law',
                    content: `Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation, you have the right to:

                    • **Access** the personal information we hold about you
                    • **Correct** inaccurate or incomplete information
                    • **Withdraw consent** to the collection or use of your data
                    • **Delete** your account and all associated personal data
                    • **File a complaint** with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated

                    To exercise any of these rights, please contact us at privacy@pacewellapp.com. We will respond to your request within 30 days.`,
                },
                {
                    title: '9. Children\'s Privacy',
                    content: `Pacewell is designed for adults aged 18 and over. We do not knowingly collect personal information from individuals under 18. If we become aware that a child under 18 has provided us with personal information, we will delete it immediately.`,
                },
                {
                    title: '10. Marketing Communications',
                    content: `We will only send you marketing communications if you have explicitly opted in to receive them. You can withdraw your consent at any time by updating your preferences in the App or by contacting us at privacy@pacewellapp.com.`,
                },
                {
                    title: '11. Changes to This Policy',
                    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by sending a notification through the App or by email. Your continued use of Pacewell after the effective date of any changes constitutes your acceptance of the updated policy.`,
                },
                {
                    title: '12. Contact Us',
                    content: `If you have any questions, concerns or requests regarding this Privacy Policy, please contact us:

                    **Pacewell Ltd**
                    Email: privacy@pacewellapp.com
                    Website: pacewellapp.com

                    You also have the right to contact the Office of the Privacy Commissioner of Canada:
                    Website: priv.gc.ca
                    Phone: 1-800-282-1376`,
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
                                const parts = line.split(/(\*\*[^*]+\*\*)/g);

                                return (
                                    <span key={k}>

                                        {parts.map((part, l) =>
                                            part.startsWith('**') && part.endsWith('**')
                                                ? <strong key={l} style={{ color: T.dark, fontWeight: 600 }}>{part.slice(2, -2)}</strong>
                                                : <span key={l}>{part}</span>
                                            )
                                        }
                                        {k < line.split('\n').length - 1 && <br />}

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
                    <Link href="/terms" style={{ fontFamily: fontSans, fontSize: 14, color: T.green, textDecoration: 'none' }}>
                        Terms of Service →
                    </Link>
                </div>
            </div>
        </main>
    );
}