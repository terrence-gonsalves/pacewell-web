'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─── Theme ────────────────────────────────────────────────────────────────────

const T = {
    green: '#2E7D52',
    greenLight: '#E8F5EE',
    greenMid: '#3d9467',
    greenDark: '#1B5E35',
    bg: '#F7F8F6',
    dark: '#0F1A14',
    text: '#1A2E22',
    subtle: '#6B7C72',
    border: '#DDE8E2',
    white: '#FFFFFF',
};

const fontDisplay = "'Fraunces', Georgia, serif";
const fontSans = "'DM Sans', system-ui, sans-serif";

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(247,248,246,0.85)',
            backdropFilter: 'blur(12px)',
            boxShadow: scrolled ? '0 1px 20px rgba(15,26,20,0.08)' : '0 1px 0px rgba(15,26,20,0.06)',
            borderBottom: `1px solid ${scrolled ? T.border : 'rgba(221,232,226,0.6)'}`,
        }}>
            <div style={{
                maxWidth: '1100px', margin: '0 auto', padding: '16px 24px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{
                        width: 36, height: 36, borderRadius: 10, background: T.green,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(46,125,82,0.3)',
                    }}>
                        <span style={{ color: 'white', fontSize: 18 }}>⚡</span>
                    </div>
                    <span style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: T.dark, letterSpacing: '-0.02em' }}>
                        Pacewell
                    </span>
                </a>
                
                <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hide-mobile">
                
                    {[['Features', '#features'], ['How It Works', '#how-it-works'], ['Reviews', '#testimonials']].map(([label, href]) => (
                    <a key={label} href={href} style={{
                            fontFamily: fontSans, fontSize: 14, fontWeight: 500,
                            color: T.subtle, textDecoration: 'none', transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = T.green)}
                        onMouseLeave={e => (e.currentTarget.style.color = T.subtle)}
                    >
                        {label}
                    </a>
                    ))}

                    <a href="#download" style={{
                            background: T.green, color: 'white', padding: '10px 20px',
                            borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(46,125,82,0.25)',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = T.greenDark; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = T.green; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        Download Free
                    </a>
                </div>
                
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
                    className="show-mobile"
                >
                    <span style={{ fontSize: 24, color: T.dark }}>{menuOpen ? '✕' : '☰'}</span>
                </button>
            </div>
            
            {menuOpen && (
            <div style={{
                background: 'white', borderTop: `1px solid ${T.border}`,
                padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16,
            }}>

                {[['Features', '#features'], ['How It Works', '#how-it-works'], ['Reviews', '#testimonials']].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}
                    style={{ fontFamily: fontSans, fontSize: 16, color: T.text, textDecoration: 'none' }}
                >
                    {label}
                </a>
                ))}

                <a href="#download" onClick={() => setMenuOpen(false)} style={{
                    background: T.green, color: 'white', padding: '12px 20px',
                    borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none', textAlign: 'center',
                }}>
                    Download Free
                </a>
            </div>
            )}

        </nav>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
    return (
        <section style={{
            minHeight: '100vh', background: T.bg, display: 'flex', alignItems: 'center',
            paddingTop: 80, position: 'relative', overflow: 'hidden',
        }}>
            <div style={{
                    position: 'absolute', top: 60, right: -100, width: 500, height: 500,
                    background: T.greenLight, borderRadius: '50%', opacity: 0.5,
                    filter: 'blur(80px)', pointerEvents: 'none',
                }} 
            />
        
            <div style={{
                position: 'absolute', bottom: -100, left: -100, width: 400, height: 400,
                background: T.greenLight, borderRadius: '50%', opacity: 0.4,
                filter: 'blur(80px)', pointerEvents: 'none',
            }} />

            <div style={{
                    maxWidth: 1100, margin: '0 auto', padding: '60px 24px',
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
                    width: '100%', position: 'relative',
                }} 
                className="hero-grid"
            >                
            <div>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'white', border: `1px solid ${T.border}`,
                    borderRadius: 100, padding: '8px 16px', marginBottom: 28,
                    boxShadow: '0 2px 8px rgba(15,26,20,0.06)',
                }}>
                    <span style={{
                        width: 8, height: 8, borderRadius: '50%', background: T.green,
                        display: 'inline-block',
                    }} />
                    <span style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 500, color: T.green }}>
                        AI-Powered Wellness Tracking
                    </span>
                </div>

                <h1 style={{
                    fontFamily: fontDisplay, fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    fontWeight: 700, color: T.dark, lineHeight: 1.08,
                    letterSpacing: '-0.03em', marginBottom: 24,
                }}>
                    Recovery<br />
                    tracking,{' '}
                    <span style={{ color: T.green, fontStyle: 'italic' }}>powered</span>
                    <br />by AI
                </h1>

                <p style={{
                    fontFamily: fontSans, fontSize: 18, color: T.subtle,
                    lineHeight: 1.7, marginBottom: 36, maxWidth: 440,
                }}>
                    The wellness companion built for active adults 40+. Daily check-ins,
                    personalised AI insights, and pattern recognition that keeps you
                    ahead of injury.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
                    <a href="#download" style={{
                            background: T.green, color: 'white', padding: '14px 28px',
                            borderRadius: 14, fontFamily: fontSans, fontSize: 16, fontWeight: 600,
                            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                            boxShadow: '0 6px 20px rgba(46,125,82,0.3)',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(46,125,82,0.35)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(46,125,82,0.3)'; }}
                    >                        
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg> 
                        App Store
                    </a>
                    <a href="#download" style={{
                            background: 'white', color: T.dark, padding: '14px 28px',
                            borderRadius: 14, fontFamily: fontSans, fontSize: 16, fontWeight: 600,
                            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                            border: `1.5px solid ${T.border}`,
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = T.green; e.currentTarget.style.color = T.green; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.dark; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.18 23.76c.37.2.79.21 1.18.04l12.11-6.96-2.63-2.63zM.29 1.27C.11 1.6 0 2.01 0 2.51v18.98c0 .5.11.91.29 1.24l.07.06 10.64-10.64v-.25L.36 1.21zM20.06 8.66l-3.06-1.76-2.96 2.96 2.97 2.97 3.06-1.77c.87-.5.87-1.32-.01-1.4zM4.36.2l12.11 6.96-2.63 2.63L1.54.16C1.93-.01 2.35 0 2.73.2z"/>
                        </svg>
                        Google Play
                    </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ display: 'flex' }}>
                    
                        {['D', 'S', 'R', 'M'].map((initial, i) => (
                        <div key={i} style={{
                            width: 32, height: 32, borderRadius: '50%', background: T.green,
                            border: `2px solid white`, marginLeft: i > 0 ? -8 : 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: 'white',
                        }}>
                            {initial}
                        </div>
                        ))}

                    </div>
                    <div>
                        <div style={{ color: '#F59E0B', fontSize: 12, marginBottom: 2 }}>★★★★★</div>
                        <div style={{ fontFamily: fontSans, fontSize: 12, color: T.subtle }}>Loved by active adults 40+</div>
                    </div>
                </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <div style={{
                    position: 'absolute', left: -20, top: 80, zIndex: 10,
                    background: 'white', borderRadius: 16, padding: '10px 14px',
                    boxShadow: '0 8px 32px rgba(15,26,20,0.12)', border: `1px solid ${T.border}`,
                    maxWidth: 160,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <span style={{ fontSize: 14 }}>⚡</span>
                        <span style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: T.green }}>AI Insight</span>
                    </div>
                    <p style={{ fontFamily: fontSans, fontSize: 11, color: T.subtle, lineHeight: 1.4 }}>
                        Energy peaks after morning walks
                    </p>
                </div>
                
                <div style={{
                    position: 'absolute', right: -10, bottom: 100, zIndex: 10,
                    background: T.green, borderRadius: 16, padding: '10px 14px',
                    boxShadow: '0 8px 32px rgba(46,125,82,0.3)',
                }}>
                    <p style={{ fontFamily: fontSans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>Current Streak</p>
                    <p style={{ fontFamily: fontDisplay, fontSize: 22, fontWeight: 700, color: 'white', lineHeight: 1 }}>12 Days 🔥</p>
                </div>
                
                <div style={{
                    width: 280, height: 580,
                    background: T.dark, borderRadius: 44,
                    boxShadow: '0 32px 80px rgba(15,26,20,0.25), inset 0 0 0 2px rgba(255,255,255,0.06)',
                    position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{
                        position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                        width: 80, height: 24, background: T.dark, borderRadius: 12, zIndex: 10,
                    }} />
                        <div style={{
                            position: 'absolute', inset: 3, borderRadius: 41, overflow: 'hidden',
                            background: T.bg,
                        }}>
                            <Image src="/screenshots/dashboard.png" alt="Pacewell Dashboard" fill style={{ objectFit: 'cover', objectPosition: 'top' }} priority />
                        </div>
                    </div>
                    
                    <div style={{
                        position: 'absolute', inset: 0, background: T.greenLight,
                        borderRadius: '50%', filter: 'blur(60px)', opacity: 0.3, zIndex: -1,
                    }} />
                </div>
            </div>
        </section>
    );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────

function SocialProof() {
    const stats = [
        { value: '40+', label: 'Target age group', sub: 'Built for active adults', icon: '👥' },
        { value: 'Intelligent', label: 'Pattern recognition', sub: 'Advanced AI analysis', icon: '🧠' },
        { value: '8', label: 'Daily metrics', sub: 'Sleep, mood, energy & more', icon: '📊' },
        { value: '60s', label: 'Check-in time', sub: 'Track in under a minute', icon: '⚡' },
    ];

    return (
        <section style={{ background: T.dark, padding: '56px 24px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
                    }} 
                    className="stats-grid"
                >

                    {stats.map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 24, marginBottom: 10 }}>{stat.icon}</div>
                        <div style={{
                            fontFamily: fontDisplay, fontSize: 32, fontWeight: 700,
                            color: 'white', letterSpacing: '-0.02em', marginBottom: 4,
                        }}>
                            {stat.value}
                        </div>
                        <div style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                            {stat.label}
                        </div>
                        <div style={{ fontFamily: fontSans, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
                            {stat.sub}
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
    { icon: '✅', title: 'Daily Check-in', desc: '60 seconds a day to log mood, sleep, energy and stress with an intuitive emoji-based interface.', tag: 'Core', tagColor: T.green },
    { icon: '✨', title: 'AI Insights', desc: 'Pacewell analyses your patterns and surfaces personalised insights — trends, correlations and predictions.', tag: 'AI-Powered', tagColor: '#B45309' },
    { icon: '🏃', title: 'Activity Tracking', desc: 'Log workouts manually or connect your wearable through Apple Health and Google Health Connect.', tag: 'Wearables', tagColor: '#1D4ED8' },
    { icon: '🔥', title: 'Streak Tracking', desc: 'Build lasting habits with daily streak motivation. Every consecutive check-in counts.', tag: 'Habits', tagColor: '#C2410C' },
    { icon: '🔗', title: 'Recovery Patterns', desc: 'Spot correlations between sleep, stress and performance that even your doctor might miss.', tag: 'Analysis', tagColor: '#7C3AED' },
    { icon: '⌚', title: 'Wearable Sync', desc: 'Connects with Apple Watch, Fitbit, Garmin and more through Apple Health and Google Health Connect.', tag: 'Integration', tagColor: '#0F766E' },
];

function Features() {
    return (
        <section id="features" style={{ background: T.bg, padding: '100px 24px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ maxWidth: 560, marginBottom: 64 }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: T.greenLight, borderRadius: 100, padding: '8px 16px',
                        marginBottom: 20,
                    }}>
                        <span style={{ fontSize: 14 }}>⚡</span>
                        <span style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 600, color: T.green }}>Everything you need</span>
                    </div>
                    <h2 style={{
                        fontFamily: fontDisplay, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontWeight: 700, color: T.dark, lineHeight: 1.1,
                        letterSpacing: '-0.02em', marginBottom: 20,
                    }}>
                        Track your<br /><span style={{ color: T.green }}>recovery</span>
                    </h2>
                    <p style={{ fontFamily: fontSans, fontSize: 17, color: T.subtle, lineHeight: 1.7 }}>
                        Pacewell combines daily check-ins, wearable data and AI analysis
                        into one seamless experience designed for active adults.
                    </p>
                </div>

                <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
                    }} 
                    className="features-grid"
                >
                    
                    {features.map((f, i) => (
                    <div key={i} style={{
                            background: 'white', borderRadius: 24, padding: 28,
                            border: `1px solid ${T.border}`,
                            boxShadow:'0 2px 12px rgba(15,26,20,0.04)',
                            position: 'relative', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,26,20,0.10)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,26,20,0.04)'; }}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                            <div style={{
                                width: 48, height: 48, background: T.bg, borderRadius: 14,
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                            }}>
                                {f.icon}
                            </div>
                            <span style={{
                                    fontFamily: fontSans, fontSize: 11, fontWeight: 700,
                                    color: f.tagColor, background: `${f.tagColor}15`,
                                    padding: '4px 10px', borderRadius: 100,
                                }}
                            >
                                {f.tag}
                            </span>
                        </div>
                        <h3 style={{ fontFamily: fontDisplay, fontSize: 19, fontWeight: 600, color: T.dark, marginBottom: 10 }}>
                            {f.title}
                        </h3>
                        <p style={{ fontFamily: fontSans, fontSize: 14, color: T.subtle, lineHeight: 1.6 }}>
                            {f.desc}
                        </p>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
    { n: '01', icon: '✅', title: 'Check in daily', desc: 'Log how you feel in under 60 seconds with our intuitive emoji-based flow. Mood, sleep, energy, stress and more.', detail: 'Takes less than 60 seconds' },
    { n: '02', icon: '⌚', title: 'Sync your wearable', desc: 'Connect Apple Health or Google Health Connect. Your steps, heart rate, sleep and workouts sync automatically.', detail: 'Works with 100+ devices' },
    { n: '03', icon: '✨', title: 'Get AI insights', desc: 'Pacewell analyses your patterns across check-ins and wearable data to surface personalised insights every day.', detail: 'Insights generated daily' },
];

function HowItWorks() {
    return (
        <section id="how-it-works" style={{ background: T.dark, padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 600, height: 400,
                    background: `${T.green}25`, borderRadius: '50%',
                    filter: 'blur(80px)', pointerEvents: 'none',
                }} 
            />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'rgba(255,255,255,0.1)', borderRadius: 100,
                            padding: '8px 16px', marginBottom: 20,
                            border: '1px solid rgba(255,255,255,0.1)',
                        }}
                    >
                        <span style={{ fontSize: 14 }}>⚡</span>
                        <span style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                            How Pacewell works
                        </span>
                    </div>
                    <h2 style={{
                            fontFamily: fontDisplay, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            fontWeight: 700, color: 'white', lineHeight: 1.1,
                            letterSpacing: '-0.02em', marginBottom: 16,
                        }}
                    >
                        Simple. Consistent.<br />
                        <span style={{ color: T.greenMid }}>Powerful.</span>
                    </h2>
                    <p style={{ fontFamily: fontSans, fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto' }}>
                        Three simple steps to better recovery, fewer injuries and a deeper understanding of your health.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="steps-grid">
                    
                    {steps.map((step, i) => (
                    <div key={i} style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 24, padding: 32,
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                            <div style={{
                                    width: 56, height: 56, background: `${T.green}30`,
                                    border: `1px solid ${T.green}50`,
                                    borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                                }}
                            >
                                {step.icon}
                            </div>
                            <span style={{
                                    fontFamily: fontDisplay, fontSize: 48, fontWeight: 700,
                                    color: 'rgba(255,255,255,0.08)', lineHeight: 1,
                                }}
                            >
                                {step.n}
                            </span>
                        </div>
                        <h3 style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 600, color: 'white', marginBottom: 12 }}>
                            {step.title}
                        </h3>
                        <p style={{ fontFamily: fontSans, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 20 }}>
                            {step.desc}
                        </p>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: `${T.green}25`, borderRadius: 100, padding: '6px 12px',
                            border: `1px solid ${T.green}40`,
                        }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.greenMid }} />
                            <span style={{ fontFamily: fontSans, fontSize: 12, fontWeight: 600, color: T.greenMid }}>
                                {step.detail}
                            </span>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

const screens = [
    { title: 'Dashboard', desc: 'Your daily health overview at a glance', src: '/screenshots/dashboard.png' },
    { title: 'Daily Check-in', desc: 'Intuitive emoji-based logging in 60 seconds', src: '/screenshots/checkin.png' },
    { title: 'AI Insights', desc: 'Personalised pattern analysis', src: '/screenshots/insight.png' },
];

function Showcase() {
    return (
        <section style={{ background: T.bg, padding: '100px 24px 120px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 72 }}>
                    <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: T.greenLight, borderRadius: 100, padding: '8px 16px', marginBottom: 20,
                        }}
                    >
                        <span style={{ fontSize: 14 }}>📱</span>
                        <span style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 600, color: T.green }}>See the app</span>
                    </div>
                    <h2 style={{
                            fontFamily: fontDisplay, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            fontWeight: 700, color: T.dark, lineHeight: 1.1,
                            letterSpacing: '-0.02em', marginBottom: 16,
                        }}
                    >
                        Beautifully designed<br />
                        <span style={{ color: T.green }}>for your lifestyle</span>
                    </h2>
                    <p style={{ fontFamily: fontSans, fontSize: 17, color: T.subtle, maxWidth: 480, margin: '0 auto' }}>
                        Clean, readable and intuitive — every detail designed with active adults 40+ in mind.
                    </p>
                </div>

                <div style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
                        gap: 32, flexWrap: 'wrap',
                    }}
                >

                    {screens.map((screen, i) => (
                    <div key={i} style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            marginTop: 48,
                        }}
                    >
                        <div style={{
                                width: 220,
                                height: 460,
                                background: T.dark, borderRadius: 44, position: 'relative', overflow: 'hidden',
                                boxShadow: '0 24px 64px rgba(15,26,20,0.18), 0 0 0 2px rgba(255,255,255,0.06)',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
                            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            <div style={{
                                    position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                                    width: 64, height: 20, background: T.dark, borderRadius: 10, zIndex: 10,
                                }} 
                            />
                            <div style={{ position: 'absolute', inset: 3, borderRadius: 41, overflow: 'hidden', background: T.bg }}>
                                <Image src={screen.src} alt={screen.title} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                        </div>
                        <div style={{ marginTop: 20, textAlign: 'center' }}>
                            <p style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 600, color: T.dark, marginBottom: 4 }}>
                                {screen.title}
                            </p>
                            <p style={{ fontFamily: fontSans, fontSize: 13, color: T.subtle, maxWidth: 180, lineHeight: 1.4 }}>
                                {screen.desc}
                            </p>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonials = [
    { quote: 'Pacewell helped me spot that my energy crashes every time I skip my morning walk. That single insight changed my whole week.', highlight: 'That single insight changed my whole week.', name: 'David M', age: 58, activity: 'Cyclist', initial: 'D' },
    { quote: "I've tried every fitness app out there. This is the first one that actually understands recovery, not just workouts.", highlight: 'Actually understands recovery.', name: 'Susan K', age: 62, activity: 'Swimmer', initial: 'S' },
    { quote: 'The AI caught a fatigue pattern building for two weeks before I felt it. I avoided what would have been a bad injury.', highlight: 'I avoided what would have been a bad injury.', name: 'Robert T', age: 55, activity: 'Runner', initial: 'R' },
];

function Testimonials() {
    return (
        <section id="testimonials" style={{ background: 'white', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                    position: 'absolute', top: -100, right: -100, width: 500, height: 500,
                    background: T.greenLight, borderRadius: '50%', opacity: 0.5, filter: 'blur(80px)', pointerEvents: 'none',
                }} 
            />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
                <div style={{ maxWidth: 560, marginBottom: 64 }}>
                    <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: T.greenLight, borderRadius: 100, padding: '8px 16px', marginBottom: 20,
                        }}
                    >
                        <span style={{ fontSize: 14 }}>⭐</span>
                        <span style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 600, color: T.green }}>Real stories</span>
                    </div>
                    <h2 style={{
                            fontFamily: fontDisplay, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            fontWeight: 700, color: T.dark, lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Built for people<br />
                        who take their<br />
                        <span style={{ color: T.green }}>health seriously</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonials-grid">
                
                    {testimonials.map((t, i) => (
                    <div key={i} style={{
                            background: T.bg, borderRadius: 24, padding: 28,
                            border: `1px solid ${T.border}`,
                            transition: 'all 0.2s',
                            display: 'flex', flexDirection: 'column',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,26,20,0.08)'; e.currentTarget.style.borderColor = `${T.green}40`; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = T.border; }}
                    >
                        <div style={{ marginBottom: 12, color: '#F59E0B', fontSize: 14 }}>★★★★★</div>
                        <div style={{
                                background: T.greenLight, borderRadius: 12, padding: '10px 14px',
                                borderLeft: `4px solid ${T.green}`, marginBottom: 16,
                            }}
                        >
                            <p style={{ fontFamily: fontSans, fontSize: 13, fontWeight: 600, color: T.green, fontStyle: 'italic', lineHeight: 1.4 }}>
                                &ldquo;{t.highlight}&rdquo;
                            </p>
                        </div>
                        <p style={{
                                fontFamily: fontSans, fontSize: 14, color: T.subtle,
                                lineHeight: 1.6, flex: 1, marginBottom: 20,
                            }}
                        >
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        <div style={{
                                display: 'flex', alignItems: 'center', gap: 12,
                                paddingTop: 16, borderTop: `1px solid ${T.border}`,
                            }}
                        >
                            <div style={{
                                    width: 40, height: 40, borderRadius: '50%', background: T.green,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: fontSans, fontSize: 14, fontWeight: 700, color: 'white',
                                }}
                            >
                                {t.initial}
                            </div>
                            <div>
                                <p style={{ fontFamily: fontSans, fontSize: 14, fontWeight: 600, color: T.dark }}>{t.name}, {t.age}</p>
                                <p style={{ fontFamily: fontSans, fontSize: 12, color: T.subtle }}>{t.activity}</p>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// ─── Download ─────────────────────────────────────────────────────────────────

function Download() {
    return (
        <section id="download" style={{ background: T.dark, padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800, height: 400,
                    background: `${T.green}20`, borderRadius: '50%',
                    filter: 'blur(80px)', pointerEvents: 'none',
                }} 
            />

            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                <div style={{
                        width: 80, height: 80, background: `${T.green}25`,
                        border: `1px solid ${T.green}50`, borderRadius: 24,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 36, margin: '0 auto 28px',
                    }}
                >
                    ⚡
                </div>

                <h2 style={{
                        fontFamily: fontDisplay, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontWeight: 700, color: 'white', lineHeight: 1.1,
                        letterSpacing: '-0.02em', marginBottom: 16,
                    }}
                >
                    Start tracking your<br />
                    <span style={{ color: T.greenMid }}>recovery today</span>
                </h2>

                <p style={{ fontFamily: fontSans, fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 8, lineHeight: 1.6 }}>
                    Free to download. Support us with a donation if you love it.
                </p>
                <p style={{ fontFamily: fontSans, fontSize: 14, color: 'rgba(255,255,255,0.3)', marginBottom: 44 }}>
                    Available on iOS and Android · Works with 100+ wearable devices
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
                
                    {[
                        { top: 'Download on the', bottom: 'App Store' },
                        { top: 'Get it on', bottom: 'Google Play' },
                    ].map((btn, i) => (
                        <a key={i} href="#" style={{
                                background: 'white', color: T.dark, padding: '14px 28px',
                                borderRadius: 14, textDecoration: 'none',
                                display: 'flex', alignItems: 'center', gap: 12,
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)'; }}
                        >
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontFamily: fontSans, fontSize: 11, color: '#6B7280', lineHeight: 1, marginBottom: 2 }}>{btn.top}</div>
                                <div style={{ fontFamily: fontSans, fontSize: 16, fontWeight: 700, color: T.dark, lineHeight: 1 }}>{btn.bottom}</div>
                            </div>
                        </a>
                    ))}

                </div>

                <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>

                    {[
                        ['🛡️', 'Your data stays private'],
                        ['🚫', 'No ads. No tracking. No nonsense.'],
                        ['🆓', 'Always free to download'],
                    ].map(([icon, text], i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{ fontSize: 16 }}>{icon}</span>
                            <span style={{ fontFamily: fontSans, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>{text}</span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
    return (
        <footer style={{ background: T.dark, borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 24px 40px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 48 }} className="footer-grid">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <div style={{
                                    width: 36, height: 36, borderRadius: 10, background: T.green,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 4px 12px rgba(46,125,82,0.3)',
                                }}
                            >
                                <span style={{ color: 'white', fontSize: 16 }}>⚡</span>
                            </div>
                            <span style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
                                Pacewell
                            </span>
                        </div>
                        <p style={{ fontFamily: fontSans, fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
                            AI-powered recovery tracking for active adults 40+. Stay ahead of injury, one check-in at a time.
                        </p>
                    </div>

                    <div>
                        <p style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                            Legal
                        </p>

                        {['Privacy Policy', 'Terms of Service', 'Contact Us'].map(link => (
                        <a key={link} href={
                                link === 'Privacy Policy' ? '/privacy' :
                                link === 'Terms of Service' ? '/terms' :
                                'mailto:hello@getpacewell.com'
                            } 
                            style={{
                                display: 'block', fontFamily: fontSans, fontSize: 14,
                                color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: 10,
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                        >
                            {link}
                        </a>
                        ))}

                    </div>

                    <div>
                        <p style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                            Download
                        </p>

                        {[['App Store', '#download'], ['Google Play', '#download']].map(([label, href]) => (
                        <a key={label} href={href} style={{
                                display: 'block', fontFamily: fontSans, fontSize: 14,
                                color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: 10,
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                        >
                            {label}
                        </a>
                        ))}

                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                        <p style={{ fontFamily: fontSans, fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>
                            © 2026 Pacewell. All rights reserved.
                        </p>
                        <p style={{ fontFamily: fontSans, fontSize: 11, color: 'rgba(255,255,255,0.15)', maxWidth: 500, lineHeight: 1.5, textAlign: 'right' }}>
                            Pacewell is not a medical device and is not intended to diagnose, treat, cure or prevent any medical condition.
                            Always consult your healthcare provider before making changes to your health routine.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ─── Responsive CSS ───────────────────────────────────────────────────────────

const responsiveCSS = `
    .hero-grid { grid-template-columns: 1fr 1fr; }
    .stats-grid { grid-template-columns: repeat(4, 1fr); }
    .features-grid { grid-template-columns: repeat(3, 1fr); }
    .steps-grid { grid-template-columns: repeat(3, 1fr); }
    .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
    .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
    .hide-mobile { display: flex !important; }
    .show-mobile { display: none !important; }

    @media (max-width: 900px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .steps-grid { grid-template-columns: 1fr !important; }
        .testimonials-grid { grid-template-columns: 1fr !important; }
        .footer-grid { grid-template-columns: 1fr !important; }
        .hide-mobile { display: none !important; }
        .show-mobile { display: flex !important; }
    }

    @media (max-width: 600px) {
        .features-grid { grid-template-columns: 1fr !important; }
        .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
    }
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
    return (
        <>
            <style>{responsiveCSS}</style>
            <main>
                <Navbar />
                <Hero />
                <SocialProof />
                <Features />
                <HowItWorks />
                <Showcase />
                <Testimonials />
                <Download />
                <Footer />
            </main>
        </>
    );
}