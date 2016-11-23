module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],
  loaders: {
    scss: 'style-loader!css-loader!sass-loader',
  },
}
