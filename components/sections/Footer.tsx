export default function Footer() {
        return (
            <footer className="bg-dark py-12">
                <div className="max-w-6xl mx-auto px-6">        
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                                    <span className="text-white text-sm">⚡</span>
                                </div>
                                <span className="text-xl font-bold text-white">Pacewell</span>
                            </div>
                            <p className="text-gray-400 max-w-xs leading-relaxed text-sm">
                                AI-powered recovery tracking for active adults 50+. Stay ahead of injury, one check-in at a time.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-semibold">Legal</p>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-semibold">Download</p>
                            <a href="#download" className="text-gray-400 hover:text-white transition-colors text-sm">App Store</a>
                            <a href="#download" className="text-gray-400 hover:text-white transition-colors text-sm">Google Play</a>
                        </div>            
                    </div>
            
                    <div className="border-t border-gray-700 pt-8">
                        <p className="text-gray-500 text-sm text-center mb-2">
                            © 2026 Pacewell. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs text-center max-w-2xl mx-auto">
                            Pacewell is not a medical device and is not intended to diagnose, treat, cure or prevent any medical condition. Always consult your healthcare provider before making changes to your health routine.
                        </p>
                    </div>        
                </div>
            </footer>
        );
  }