module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'paper-yellow': '#FFEC96',
      'paper-yellow-deep': '#FFDE4A',
      'white': '#ffffff',
      'green': '#34b434',
      'dark-green': '#328436',
      'gray-green': '#678f63',
      'blue': '#0000ff',
      'russian-blue': '#4499a9',
      'orange': '#fd9420',
      'dark-orange': '#e08422',
      'gray-yellow': '#5f5a4a',
      'gray-orange': '#d14900',
      'gray': '#f1f1f1',
      'dark-gray': '#c0c0c0',
      'black': '#000000',
      'gray-tint': '#fcfcfc',
      'red': '#ff0000',
      'red-purple': '#cb0053',
    },
    extend: {
      backgroundImage: {
        'stationary-pattern': "url('/src/assets/images/stationary3.jpg')",
        'stationary-pattern-clinical': 'url("/src/assets/images/stationary2.jpeg")',
      }
    },
  },
  plugins: [],
}
