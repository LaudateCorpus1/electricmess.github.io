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

/**
 * Dependencies
 */
const Encore = require('@symfony/webpack-encore');
const webpack = require('webpack');
const path = require('path');
const postCssConfig = require('./webpack/postcss.config.js');

/**
 * Webpack Plugins
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Paths
 */
Encore.setPublicPath('/');
Encore.setOutputPath('./');

/**
 * Output Files
 */
Encore.configureFilenames({
    js: 'js/[name].js',
    css: 'css/[name].css'
});

/**
 * Babel
 */

// Disable default loader
Encore.configureBabel(config => {
    config.presets = [];
});

// Custom babel loader
Encore.addLoader({
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
        presets: [[ "es2015", { "modules": false } ]] ,
        plugins: [
            // For Class properties as lambda/anonymous functions
            ['transform-class-properties', { spec: true }],

            // For Swiper which seems to use it
            'transform-exponentiation-operator'
        ]
    }
});

Encore.addLoader({
    test: /\.svg/,
    use: {
        loader: 'svg-url-loader',
        options: {}
    }
});


/**
 * Image Loader
 */
// Encore.disableImagesLoader();

/**
 * TypeScript - Type checking in worker thread for faster builds
 */
Encore.enableForkedTypeScriptTypesChecking();

Encore.autoProvidejQuery();

/**
 * Enable react preseet
 */
Encore.enableReactPreset();

/**
 * Sass
 */
Encore.enableSassLoader();

// CSS main entry point
Encore.addStyleEntry('app', './resources/assets/css/main.scss');

/**
 * PostCSS / Autoprefixer
 */
Encore.enablePostCssLoader(options => {
    options.config = {
        path: 'webpack/postcss.config.js'
    };
});

/**
 * Source Maps
 */
Encore.enableSourceMaps(!Encore.isProduction());

/**
 * Build Notification
 */
if (Encore.isProduction()) {
    Encore.enableBuildNotifications();
}

/**
 * Delete output folder before each build
 */
// Encore.cleanupOutputBeforeBuild();

/**
 * Add versionning to files (cache buster)
 */
// Encore.enableVersioning();

/**
 * JavaScript Entry Point
 */
Encore.addEntry('main', './resources/assets/js/main.js');

/**
 * Copy static assets
 */
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

/**
 * Extract generated webpack config
 */
const webpackConfig = Encore.getWebpackConfig();

/**
 * Webpack Resolve Aliases from tsconfig.json "paths" values
 * https://github.com/TypeStrong/ts-loader#baseurl--paths-module-resolution
 * https://simonsmith.io/simplifying-module-resolution-with-babel-or-webpack/
 */
const tsConfig = require('./tsconfig.json');
const alias = {};

for (let key of Object.keys(tsConfig.compilerOptions.paths)) {
    alias[key.replace(/\/\*$/, '')] = path.resolve(
        __dirname,
        tsConfig.compilerOptions.paths[key][0].replace(/[\/]\*$/, '')
    );
}

webpackConfig.resolve.alias = alias;

/**
 * Fix UglifyJS bugs with ES6 syntax in TypeScript compiled files
 */
if (Encore.isProduction()) {
    webpackConfig.plugins = webpackConfig.plugins.filter(
        plugin => !(plugin instanceof webpack.optimize.UglifyJsPlugin)
    );

    webpackConfig.plugins.push(new UglifyJsPlugin());
}

/**
 * Export the final generated Webpack config file
 */
module.exports = webpackConfig;