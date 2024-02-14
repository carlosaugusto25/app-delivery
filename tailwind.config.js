/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/**/*.{ts,tsx}",
    "src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Inter_600SemiBold',
        subtitle: 'Inter_500Medium',
        body: 'Inter_400Regular',
        bold: 'Inter_700Bold'
      },
      colors: {
        'default': '#1E252F',
        'red-default': '#dc1f31'
      }
    }
  },
  plugins: [],
}
