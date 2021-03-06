var webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: __dirname,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'sinon'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/app.js',
            'app/app.module.js',
            'app/pages/landing/landing.controller.spec.js'
        ],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // allow console.log() to show up in tests
        browserConsoleLogOptions: {
            level: 'log',
            format: '%b %T: %m',
            terminal: true
        },

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // Webpack dependency
        webpack: webpackConfig,

        // Lets karma know it has to wait for webpack to preprocess files
        preprocessors: {
            'app/app.js': ['webpack'],
            'app/app.module.js': ['webpack'],
            'app/**/*.spec.js': ['webpack'],
            'app/**/**/*.spec.js': ['webpack']
        },

        webpackMiddleware: {
            stats: 'errors-only'
        }
    });
};
