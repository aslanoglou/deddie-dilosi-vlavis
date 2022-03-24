let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/online-vlavi.js', 'dist/js/online-vlavi.js');
mix.sass('src/scss/online-vlavi.scss', 'dist/css/online-vlavi.css');
mix.copyDirectory('src/images', 'dist/images');
mix.copyDirectory('src/fonts', 'dist/fonts');
