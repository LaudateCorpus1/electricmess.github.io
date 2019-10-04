/**
 *
 * How to Run :
 * ------------
 *
 * Using package.json scripts
 * --------------------------
 *
 * yarn watch
 * yarn dev
 * yarn prod
 *
 * Using Webpack Encore CLI
 * --------------------------
 *
 * yarn run encore dev
 * yarn run encore dev --watch
 * yarn run encore production
 *
 */

//--------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------

const Encore = require('@symfony/webpack-encore');
const webpack = require('webpack');
const path = require('path');
const postCssConfig = require('./webpack/postcss.config.js');

//--------------------------------------------------------------------------------
// Webpack Plugins
//--------------------------------------------------------------------------------

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//--------------------------------------------------------------------------------
// Paths
//--------------------------------------------------------------------------------

Encore.setPublicPath('/');
Encore.setOutputPath('./public/');

//--------------------------------------------------------------------------------
// Output Files
//--------------------------------------------------------------------------------

Encore.configureFilenames({
    js: 'js/[name].js',
    css: 'css/[name].css'
});

//--------------------------------------------------------------------------------
// Javascript Entry
//--------------------------------------------------------------------------------

Encore.addEntry('main', './resources/assets/js/main.js');

/**
 * Shared Entry (vendor files)
 */
Encore.createSharedEntry('vendor', [
    '@babel/polyfill',
    'jquery',
    'smoothscroll-polyfill',
    'waypoints/lib/jquery.waypoints.min.js'
]);

//--------------------------------------------------------------------------------
// Babel
// -----
// We use this to make sure there are no compiled lambda functions in the final
// output.
//
// Ex:
// class View {
//     someFunction = () => {
//          console.log("This is a class property with a binded (this.) function as a lambda.");
//     }
// }
//
// More infos:
// -----------
// https://babeljs.io/docs/en/babel-plugin-transform-class-properties/
//
//--------------------------------------------------------------------------------

// If there is a .babelrc file in the directory, these will not work/will be ignored
// Encore.configureBabel(babelConfig => {
//     // Babel Presets
//     babelConfig.presets.push('es2015');

//     // Babel Plugins

//     // For Class properties as lambda/anonymous functions
//     babelConfig.plugins.push(['transform-class-properties', { spec: true }]);

//     // For Swiper which seems to use it
//     babelConfig.plugins.push('transform-exponentiation-operator');
// });

// Custom babel loader (for when configureBabel does not work)
Encore.addLoader({
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
        presets: ['es2015'],
        plugins: [
            // For Class properties as lambda/anonymous functions
            ['transform-class-properties', { spec: true }],

            // For Swiper which seems to use it
            'transform-exponentiation-operator'
        ]
    }
});


//--------------------------------------------------------------------------------
// Image Loader
//--------------------------------------------------------------------------------

//Encore.disableImagesLoader();

//--------------------------------------------------------------------------------
// Typescript
//--------------------------------------------------------------------------------

//Encore.enableTypeScriptLoader();

/**
 * TypeScript - Type checking in worker thread for faster builds
 */
//Encore.enableForkedTypeScriptTypesChecking();

//--------------------------------------------------------------------------------
// jQuery
//--------------------------------------------------------------------------------

Encore.autoProvidejQuery();

//--------------------------------------------------------------------------------
// Sass
//--------------------------------------------------------------------------------

Encore.enableSassLoader(
    option => {
        // option.inputPaths = ['node_modules'];
    },
    {
        resolveUrlLoader: false
    }
);

//--------------------------------------------------------------------------------
// PostCSS / Autoprefixer
//--------------------------------------------------------------------------------

Encore.enablePostCssLoader(options => {
    options.config = {
        path: 'webpack/postcss.config.js'
    };
});

//--------------------------------------------------------------------------------
// Sourcemaps
//--------------------------------------------------------------------------------

Encore.enableSourceMaps(!Encore.isProduction());

//--------------------------------------------------------------------------------
// Build Notification
//--------------------------------------------------------------------------------

if (Encore.isProduction()) {
    Encore.enableBuildNotifications();
}

//--------------------------------------------------------------------------------
// Delete output folder before each build
//--------------------------------------------------------------------------------

// Encore.cleanupOutputBeforeBuild();

//--------------------------------------------------------------------------------
// Add versionning to files (cache buster)
//--------------------------------------------------------------------------------

// Encore.enableVersioning();

//--------------------------------------------------------------------------------
// Browsersync Live Reload Plugin
//--------------------------------------------------------------------------------

// Encore.addPlugin(
//     new BrowserSyncPlugin({
//         // Browse to http://localhost:3000/ during development, directory is being served
//         host: 'localhost',
//         port: 3000,
//         proxy: 'u92.test',
//         files: ['templates/**/*.twig', 'templates/**/*.html', 'templates/**/*.htm'],

//         // Stop the browser from automatically opening
//         open: false
//     })
// );

//--------------------------------------------------------------------------------
// Copy Static Assets Plugin
//--------------------------------------------------------------------------------

Encore.addPlugin(
    new CopyWebpackPlugin(
        [
            {
                context: 'resources/assets/static',
                from: '**/*',
                to: 'static'
            }
        ],
        {}
    )
);

//--------------------------------------------------------------------------------
// Extract generated webpack config
//--------------------------------------------------------------------------------

const webpackConfig = Encore.getWebpackConfig();




//--------------------------------------------------------------------------------
// UglifyJS Plugin
//--------------------------------------------------------------------------------

/**
 * Fix UglifyJS bugs with ES6 syntax in TypeScript compiled files
 */
if (Encore.isProduction()) {
    webpackConfig.plugins = webpackConfig.plugins.filter(
        plugin => !(plugin instanceof webpack.optimize.UglifyJsPlugin)
    );

    webpackConfig.plugins.push(new UglifyJsPlugin());
}

//--------------------------------------------------------------------------------
// Export the final generated Webpack config file
//--------------------------------------------------------------------------------

module.exports = webpackConfig;
