import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2E7D52',
                    light: '#E8F5EE',
                    mid: '#3d9467',
                    dark: '#1B5E35',
                },
                background: '#F7F8F6',
                dark: '#0F1A14',
                mid: '#2A3D32',
                body: '#1A2E22',
                subtle: '#6B7C72',
                border: '#DDE8E2',
            },
            fontFamily: {
                display: ['Fraunces', 'Georgia', 'serif'],
                sans: ['DM Sans', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.75rem',
            },
            boxShadow: {
                'sm': '0 2px 12px rgba(15, 26, 20, 0.06)',
                'md': '0 8px 32px rgba(15, 26, 20, 0.10)',
                'lg': '0 24px 64px rgba(15, 26, 20, 0.14)',
                'green': '0 8px 32px rgba(46, 125, 82, 0.20)',
                'green-lg': '0 16px 48px rgba(46, 125, 82, 0.28)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'fade-up': 'fadeUp 0.6s ease forwards',
                'pulse-green': 'pulseGreen 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                pulseGreen: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(46, 125, 82, 0.3)' },
                    '50%': { boxShadow: '0 0 0 12px rgba(46, 125, 82, 0)' },
                },
            },
        },
    },
    plugins: [],
}

export default config