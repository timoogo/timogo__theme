
let mix = require('laravel-mix');
mix
    .js('src/js/app.js', 'js')
    .sass('src/scss/app.scss', 'css')
    .setPublicPath('dist')
    .options({postCss: [require('tailwindcss')],
}).browserSync({
    server: './',
    files:['./**/*.html', "./src/fonts/*.ttc",  './dist'],
    reloadDelay: 2000
}) 
mix.webpackConfig({
    module: {
        rules: [
          {
            test: /\.(ttc|woff|woff2)$/,
            use: {
              loader: 'url-loader',
            },
          },
        ],
      },
    stats: {
         children: true
    }
});



