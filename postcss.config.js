module.exports = {
    "plugins": [
      require('tailwindcss')('./tailwind.js'),
      require('postcss-import'),
      require('postcss-custom-properties'),
      require('postcss-color-function'),
      require('autoprefixer')
    ]
  }