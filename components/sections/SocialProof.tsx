export default function SocialProof() {
    const stats = [
        {
            value: '50+',
            label: 'Target age group',
            sublabel: 'Built specifically for active adults',
            icon: '👥',
        },
        {
            value: 'Claude AI',
            label: 'Pattern recognition',
            sublabel: 'Advanced AI analysis engine',
            icon: '🧠',
        },
        {
            value: '8',
            label: 'Daily metrics tracked',
            sublabel: 'Sleep, mood, energy, stress & more',
            icon: '📊',
        },
        {
            value: '60s',
            label: 'Daily check-in time',
            sublabel: 'Track your wellness in under a minute',
            icon: '⚡',
        },
    ];

    return (
        <section className="bg-dark py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, #2E7D52 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="text-center group"
                    >
                        <div className="text-2xl mb-3">{stat.icon}</div>
                        <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                            {stat.value}
                        </p>
                        <p className="text-sm font-semibold text-white/60 mb-1">{stat.label}</p>
                        <p className="text-xs text-white/30 leading-snug hidden md:block">{stat.sublabel}</p>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    );
  }