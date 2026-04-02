import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Showcase from '@/components/sections/Showcase';
import Testimonials from '@/components/sections/Testimonials';
import Download from '@/components/sections/Download';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
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
    );
}