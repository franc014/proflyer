var elixir = require('laravel-elixir');
//var browserify=require('laravel-elixir-browserify');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    /*****************STYLES********************/
    mix.sass("app.scss","resources/assets/css");
    mix.styles([
        'app.css',
        'jquery.fileupload.css',
        'nganimations.css',
        'textAngular.css',
        'validations.css',
        'spinners.css'
    ],'public/css/admin/app.css')

    /*****************SCRIPTS********************/
    //mix.browserify('adminapp.js','public/js/admin/app.js');
    /*mix.scripts([
        '/admin/external/jquery-1.11.1.min.js',
        '/admin/external/jquery-ui.min.js',
        '/admin/external/bootstrap.min.js',
        '/admin/external/navresponsive.js',
        '/admin/external/jquery.ui.widget.js',
        '/admin/external/jquery.fileupload.js',
    ],'public/js/admin/bundle.js');*/








});
