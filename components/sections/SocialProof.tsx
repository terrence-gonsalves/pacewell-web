export default function SocialProof() {
    const stats = [
        { value: '40+', label: 'Target Age Group', sublabel: 'Built specifically for active adults' },
        { value: 'AI', label: 'Pattern Recognition', sublabel: 'Powered by Claude AI' },
        { value: '4', label: 'Daily Metrics', sublabel: 'Sleep, mood, energy and stress' },
    ];
  
    return (
        <section className="bg-white border-y border-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                        <p className="text-lg font-semibold text-dark mb-1">{stat.label}</p>
                        <p className="text-sm text-gray-400">{stat.sublabel}</p>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
  }