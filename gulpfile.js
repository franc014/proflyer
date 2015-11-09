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

    mix.sass("genesis.scss","public/css/themes/genesis");
    //mix.sass("/themes/iptelecom/default.scss","public/css/themes/iptelecom");
    //mix.scripts();
    //mix.less('app.less');

    /***********browserify admin************/
    //mix.browserify('adminapp.js');
    /***************************************/

    /***********browserify site************/
    /*mix.browserify("siteapp.js", {
        debug: true,
        insertGlobals: true,
        output: "public/js/themes/genesis",
        rename: "sbundle.js"
    });*/
    /***********Sass / Theme**********************/

    /*********************************************/
    /*mix.browserify("usersiteapp.js", {
        debug: true,
        insertGlobals: true,
        //transform: ["debowerify"],
        output: "public/js",
        rename: "ubundle.js"
    });*/
    //mix.stylesIn('resources/assets/vendor/spinkit/scss');
    //mix.sass('resources/assets/vendor/spinkit/scss/_variables.scss','resources/assets/vendor/spinkit/scss/_variables.css');
    //mix.sass('resources/assets/sass/mods.scss','public/css/admin');
    //mix.sass('resources/assets/vendor/spinkit/scss');
    //mix.copy('resources/assets/js/admin/templates', 'public/js/admin/angular/templates');
    //mix.copy('vendor/packages', 'resources/assets/vendor');

});
