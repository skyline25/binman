module.exports = {
  plugins: {
    'autoprefixer': {
      'browsers': ['last 4 versions']
    },
    'cssnano': {
      preset: 'default',
    },
  },
  sourceMap: true
}