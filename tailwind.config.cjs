/*********************** Tailwind Config ***********************/
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif']
      },
      colors: {
        navy: '#0a0f1f',
        midnight: '#0d1428',
        accent: {
          cyan: '#00eaff',
          purple: '#a855f7'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, rgba(0,234,255,0.25), transparent 70%)',
        'gradient-futuristic': 'linear-gradient(135deg, rgba(0,234,255,0.15), rgba(168,85,247,0.15))'
      },
      boxShadow: {
        glow: '0 0 8px 2px rgba(0,234,255,0.6)',
        'glow-purple': '0 0 8px 2px rgba(168,85,247,0.6)'
      }
    }
  },
  plugins: []
};
