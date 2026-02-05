/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode surfaces (white to light gray)
        surface: {
          0: '#ffffff',
          1: '#f8fafc',
          2: '#f1f5f9',
          3: '#e2e8f0',
          4: '#cbd5e1',
        },
        // Product accent colors - adjusted for light mode contrast
        accent: {
          signal: '#b45309',      // amber-700 (was #E8A838)
          plinth: '#4f46e5',      // indigo-600 (was #7B8CDE)
          armature: '#0d9488',    // teal-600 (was #4ECDC4)
          bench: '#dc2626',       // red-600 (was #FF6B6B)
          relay: '#7c3aed',       // violet-600 (was #A78BFA)
          retro: '#db2777',       // pink-600 (was #F472B6)
          folio: '#059669',       // emerald-600 (was #34D399)
          primary: '#0d9488',
          secondary: '#4f46e5',
        },
        // Text colors
        text: {
          primary: '#0f172a',
          secondary: '#334155',
          muted: '#64748b',
          faint: '#94a3b8',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
