module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'paper-yellow': '#FFEC96',
      'paper-yellow-deep': '#FFDE4A',
      'white': '#ffffff',
      'green': '#59a958',
      'blue': '#0000ff',
      'orange': '#fd9420',
      'gray-yellow': '#5f5a4a',
      'gray-orange': '#d14900',
    },
    extend: {
      backgroundImage: {
        'stationary-pattern': "url('/src/assets/images/stationary3.jpg')"
      }
    },
  },
  plugins: [],
}
