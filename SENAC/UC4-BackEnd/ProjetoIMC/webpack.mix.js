const mix = require('laravel-mix');

mix.sass('resources/css/app.scss', 'public/css')
mix.copy('resources/js/app.js', 'public/js/')