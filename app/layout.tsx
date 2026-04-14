import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Pacewell — AI Recovery Tracking for Active Adults 50+',
    description: 'Daily check-ins, personalised AI insights and pattern recognition that helps you stay ahead of injury. Built for active adults 50+.',
    keywords: 'recovery tracking, wellness app, active adults, AI health insights, injury prevention',
    openGraph: {
        title: 'Pacewell — AI Recovery Tracking for Active Adults 50+',
        description: 'Daily check-ins, personalised AI insights and pattern recognition that helps you stay ahead of injury.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-background text-dark">
                {children}
            </body>
        </html>
    );
}