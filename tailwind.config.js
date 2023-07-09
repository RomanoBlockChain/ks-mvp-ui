module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        384: '384px',
      },
      gridTemplateColumns: {
        '40-40-20': '1fr 1fr 150px',
        'delete' : '1fr 1fr 40px',
        'deleteMB' : '1fr 1fr 20px'

      },
    },
  },
  plugins: [],
}
