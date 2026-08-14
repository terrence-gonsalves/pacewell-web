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
                        Last updated: August 14, 2026
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
                    Pacewell Ltd (&quot;Pacewell&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and recognizes that health and wellness information can be sensitive.

                    This Privacy Policy explains what information Pacewell collects, how we use it, when information is processed by service providers, how we protect it, and the choices available to you.

                    This policy applies to the Pacewell mobile application (&quot;the App&quot;) and the Pacewell website (&quot;the Website&quot;).

                    Pacewell is designed as a general wellness and recovery-tracking service. It is not a medical device and does not provide medical advice, diagnosis, or treatment.
                    </p>
                </div>

                {[
                {
                    title: '1. Who We Are',
                    content: `Pacewell Ltd is a Canadian company that develops and operates the Pacewell mobile application and website.

                    Questions, requests, or concerns about this Privacy Policy or your personal information may be directed to:

                    **Pacewell Ltd**
                    Privacy contact: privacy@getpacewell.com
                    Website: getpacewell.com`,
                },
                {
                    title: '2. Information We Collect',
                    content: `We collect information that you provide directly to Pacewell and, where you choose to enable an integration, health and fitness information made available through Google Health Connect.

                    **Account Information**
                    When you create and maintain a Pacewell account, we may collect:

                    - your email address;
                    - your name;
                    - your age;
                    - your activity level;
                    - your selected health and wellness goals; and
                    - a profile image if you choose to upload one.

                    Your email address is used for account authentication, account-related communications, security, and support.

                    **Daily Check-in Data**
                    When you complete a daily check-in, Pacewell may collect information you choose to provide about:

                    - mood;
                    - energy;
                    - stress;
                    - sleep quality;
                    - sleep duration;
                    - nutrition quality;
                    - water intake; and
                    - optional written notes.

                    Written notes are free-form. You should avoid entering information about another person or information you do not want included in your wellness data.

                    **Activity information**
                    When you manually record activities, or import supported activity information, Pacewell may process information such as:

                    - activity type;
                    - date;
                    - duration;
                    - perceived exertion;
                    - source of the activity; and
                    - identifiers used to prevent duplicate imports.

                    **Health Connect information**
                    If you choose to connect Google Health Connect and grant Pacewell permission to access supported data, Pacewell may process health and fitness information such as:

                    - step count;
                    - heart-rate information, including resting, minimum, maximum, or average heart rate where available;
                    - heart-rate variability where available;
                    - body weight; and
                    - exercise or workout information.

                    Pacewell only receives Health Connect information for which you grant permission and that is used to provide Pacewell's user-facing health, activity, recovery, and insight features.

                    You can manage or revoke Pacewell's Health Connect permissions through Android and Health Connect settings.

                    Google treats information accessed through Health Connect permissions as personal and sensitive user data and requires apps to limit access to data necessary for their approved functionality.

                    **Notification preferences**
                    If you choose to enable notifications, Pacewell stores the settings required to provide reminders you select, such as daily check-in or evening insight reminders.

                    Pacewell does not enable these reminders without your choice.`,
                },
                {
                    title: '3. How We Use Your Information',
                    content: `We use personal information only for purposes related to providing, securing, maintaining, and improving Pacewell.

                    These purposes may include:

                    - creating and authenticating your account;
                    - maintaining your profile and preferences;
                    - storing and displaying daily check-ins;
                    - recording and displaying activities;
                    - importing health and fitness information you authorize through Health Connect;
                    - calculating health, activity, and wellness trends;
                    - generating personalized AI-supported wellness insights;
                    - sending reminders you have chosen to enable;
                    - providing account and security communications;
                    - troubleshooting and maintaining the service;
                    - responding to support or privacy requests;
                    - preventing unauthorized access or misuse; and
                    - meeting applicable legal obligations.

                    We do **not** sell your personal information.

                    We do **not** sell your health information.

                    We do **not** use Health Connect data for advertising, credit decisions, employment decisions, insurance eligibility, or data-broker purposes.

                    These restrictions are also consistent with Google's requirements governing Health Connect data.`,
                },
                {
                    title: '4. AI-Generated Wellness Insights',
                    content: `Pacewell uses Anthropic's Claude API to generate personalized wellness insights from recent Pacewell data.

                    When an insight is generated, Pacewell may send relevant information to Anthropic for processing, including:

                    - age;
                    - activity level;
                    - selected health goals;
                    - daily check-in information;
                    - activity information;
                    - Health Connect-derived metrics; and
                    - written check-in notes, if you have entered them.

                    Pacewell does not intentionally include your email address or name in the prompt sent to Anthropic for insight generation.

                    However, because check-in notes are free-form, information that you personally enter into those notes may be included when an insight is generated. You should therefore avoid entering names, contact details, or other personally identifying information in notes unless you are comfortable with that information being processed for insight generation.

                    Anthropic processes this information as a service provider through its commercial API. Anthropic states that standard API inputs and outputs are automatically deleted from its backend within 30 days, subject to exceptions such as legal requirements, abuse prevention, or a different contractual retention arrangement.

                    AI-generated insights may contain errors or incomplete interpretations. They are provided for general wellness purposes and are not medical advice.`,
                },
                {
                    title: '5. How We Share Information',
                    content: `We do not sell or rent your personal information.

                    We share or process information with service providers only where required to operate Pacewell.

                    Current service providers include:

                    **Supabase**
                    Used for authentication, database storage, server-side functions, and file storage such as profile images.

                    **Anthropic**
                    Used to process selected Pacewell data for AI-generated wellness insights.

                    **Google Health Connect**
                    Used on supported Android devices to allow you to authorize Pacewell to access selected health and fitness information.

                    **Expo / EAS**
                    Used as part of Pacewell's mobile application development, build, and distribution infrastructure.

                    Service providers may process information in jurisdictions outside Canada. Their processing is subject to their own contractual, security, legal, and privacy obligations.

                    We may also disclose information where required by applicable law, court order, regulatory requirement, or where reasonably necessary to protect Pacewell, our users, or others from fraud, security threats, or unlawful activity.`,
                },
                {
                    title: '6. Health and Wellness Information',
                    content: `Pacewell treats health and wellness information as sensitive information.

                    Access to Health Connect information is optional. You choose whether to connect Health Connect and which available permissions to grant.

                    Pacewell attempts to limit collection and use of health information to the information necessary to provide its health, activity, recovery, and insight features.

                    Pacewell does not provide your health information to employers, insurers, advertisers, or data brokers for their independent use.

                    Canadian privacy guidance requires organizations to limit collection to what is necessary for identified purposes, use or disclose information only for those purposes unless otherwise authorized, and apply safeguards appropriate to the sensitivity of the information.`,
                },
                {
                    title: '7. Data Storage and Security',
                    content: `Pacewell uses Supabase infrastructure to store account and application data.

                    We use technical and organizational measures intended to protect personal information, including:

                    - encrypted network connections;
                    - authenticated access;
                    - user-scoped database access controls;
                    - database Row Level Security;
                    - restricted server-side administrative credentials;
                    - controlled storage access; and
                    - account authorization checks for sensitive operations.

                    No internet-connected system can guarantee absolute security. We therefore cannot guarantee that unauthorized access, loss, alteration, or disclosure will never occur.

                    If we become aware of a privacy or security incident, we will respond in accordance with applicable legal requirements.`,
                },
                {
                    title: '8. International Processing',
                    content: `Some Pacewell service providers may process or store information outside Canada.

                    When personal information is processed in another country, it may be subject to that country's laws and may be accessible to courts, law-enforcement agencies, or governmental authorities in accordance with those laws.

                    We use service providers for the purposes described in this policy and seek to limit the information provided to what is reasonably necessary for those purposes.`,
                },
                {
                    title: '9. Data Retention and Account Deletion',
                    content: `Pacewell retains information while your account remains active and for as long as reasonably necessary to provide the service, fulfil the purposes described in this Privacy Policy, meet legal obligations, resolve disputes, or protect the security and integrity of the service.

                    You may delete your Pacewell account through the App.

                    When account deletion succeeds, Pacewell deletes your authentication account and associated active application records, including information associated with your profile, check-ins, activities, AI insights, and stored health metrics. A stored Pacewell profile image associated with the account is also removed from Pacewell's active storage.

                    Deletion from Pacewell does not necessarily cause information already processed by an independent infrastructure or service provider to disappear from that provider's systems immediately. Limited residual information may temporarily remain in backups, logs, fraud-prevention systems, legal records, or service-provider systems where retention is required for security, legal, or operational purposes.

                    For example, Anthropic currently states that standard commercial API inputs and outputs are normally deleted from its backend within 30 days, subject to stated exceptions.

                    The current Pacewell account-deletion implementation verifies the authenticated user, removes the associated avatar object where present, and deletes the Supabase authentication user, which triggers deletion of associated database records.`,
                },
                {
                    title: '10. Your Privacy Choices and Rights',
                    content: `Depending on the privacy law applicable to your relationship with Pacewell, you may have rights relating to your personal information, including the ability to:

                    - request access to personal information Pacewell holds about you;
                    - request correction of inaccurate or incomplete information;
                    - withdraw consent where processing is based on consent, subject to legal or contractual limitations;
                    - change or revoke Health Connect permissions;
                    - disable notifications;
                    - request information about how your personal information has been used or disclosed;
                    - delete your Pacewell account; and
                    - raise a concern about Pacewell's handling of your personal information.

                    The Office of the Privacy Commissioner of Canada identifies access, correction, openness, safeguards, consent, and the ability to challenge an organization's compliance among the core principles of PIPEDA.

                    To make a privacy request, contact us using the information in Section 1.

                    You may also contact the Office of the Privacy Commissioner of Canada if you believe your privacy rights have not been respected.`,
                },
                {
                    title: '11. Children\'s Privacy',
                    content: `Pacewell is intended for adults aged **18 and older**.

                    We do not knowingly offer Pacewell to children or knowingly collect personal information from individuals under 18.

                    If we learn that information belonging to a person under 18 has been collected contrary to this policy, we will take reasonable steps to delete it.`,
                },
                {
                    title: '12. Medical and Wellness Disclaimer',
                    content: `Pacewell is a general wellness and fitness application.

                    Pacewell is **not a medical device** and is not intended to diagnose, treat, cure, prevent, or monitor a disease or medical condition.

                    AI-generated insights, trends, scores, observations, reminders, and other information provided by Pacewell are for general wellness and informational purposes only.

                    They are not a substitute for advice, diagnosis, or treatment from a qualified healthcare professional.

                    Do not delay seeking professional medical care because of information provided by Pacewell.`,
                },
                {
                    title: '13. Changes to This Privacy Policy',
                    content: `We may update this Privacy Policy as Pacewell evolves, our service providers change, or applicable legal and regulatory requirements change.

                    When we make material changes, we may notify users through the App, by email, or through another appropriate method.

                    The "Last updated" date at the top of this policy identifies the most recent revision.

                    Where required by law, we will request consent before using personal information for a materially different purpose.`,
                },
                {
                    title: '14. Contact Us',
                    content: `For questions, access requests, correction requests, deletion questions, or other privacy concerns, contact:

                    **Pacewell Ltd**
                    Privacy contact: privacy@getpacewell.com
                    Website: getpacewell.com

                    You may also obtain information about Canadian privacy rights from the **Office of the Privacy Commissioner of Canada**.`,
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
                                            <span style={{position: 'absolute', left: 0}}>•</span>
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
                    <Link href="/terms" style={{ fontFamily: fontSans, fontSize: 14, color: T.green, textDecoration: 'none' }}>
                        Terms of Service →
                    </Link>
                </div>
            </div>
        </main>
    );
}