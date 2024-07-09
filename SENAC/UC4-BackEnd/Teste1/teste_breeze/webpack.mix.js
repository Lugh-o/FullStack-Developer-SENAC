const mix = require('laravel-mix');

// Compila o arquivo SCSS e salva o resultado em public/css/app.css
mix.sass('resources/sass/app.scss', 'public/css');

// Copia todos os arquivos JS do diretório resources/js para o diretório public/js
mix.copy('resources/js', 'public/js');
