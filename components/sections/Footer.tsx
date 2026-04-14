export default function Footer() {
    return (
        <footer className="bg-dark border-t border-white/5 py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-green">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="white" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="font-display text-xl font-semibold text-white tracking-tight">Pacewell</span>
                        </div>
                        <p className="text-white/40 max-w-xs leading-relaxed text-sm mb-6">
                            AI-powered recovery tracking for active adults 40+. 
                            Stay ahead of injury, one check-in at a time.
                        </p>
                        
                        <div className="flex gap-3">

                            {['𝕏', 'in', 'f'].map((icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors text-sm font-bold"
                            >
                                {icon}
                            </a>
                            ))}

                        </div>
                    </div>
                    
                    <div>
                        <p className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Contact Us</a>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-4">Download</p>
                        <div className="flex flex-col gap-3">
                            <a href="#download" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2">
                                <span>🍎</span> App Store
                            </a>
                            <a href="#download" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2">
                                <span>🤖</span> Google Play
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/20 text-sm">
                        © 2026 Pacewell. All rights reserved.
                    </p>
                    <p className="text-white/15 text-xs text-center max-w-lg leading-relaxed">
                        Pacewell is not a medical device and is not intended to diagnose, treat, cure or prevent any medical condition. 
                        Always consult your healthcare provider before making changes to your health routine.
                    </p>
                </div>    
            </div>
        </footer>
    );
}