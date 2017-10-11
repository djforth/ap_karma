let webpack = require('webpack');
let {resolve} = require('path');
let config     = require('./config')
  , plugins    = require('./karma_plugins');

let webpack_plugins = [];

if (config.get('jquery')){
  webpack_plugins = [
    new webpack.ProvidePlugin({
      '$': 'jquery'
      , 'jQuery': 'jquery'
      , 'window.jQuery': 'jquery'
    })
  ];
}

let loaders = [
  {
    test: /\.(js|jsx)?(\.erb)?$/,
    loader: 'babel-loader',
    // , loader: 'babel-loader'
    // , include: PATHS.src
    exclude: /node_modules/,
    query: {
      cacheDirectory: true,
      plugins: [[
        "istanbul",
        {
          "exclude": [
            "**/*_spec.js"
          ]
        }
      ],
      "rewire"],
      presets: [
        // ["es2015", {"modules": false}],
        ["env", {
          modules: false,
          "targets": {
              'node': 4,
              "browsers": [
                "last 2 versions",
                "chrome >= 55",
                "IE >= 11"
              ]
            }
        }]
      ]
    }
  }
  , {
    test: /\.json$/
    , loader: 'json-loader'
  }
];

if (config.get('coffeescript')){
  loaders.push({
    test: /\.coffee$/
    , loader: 'coffee-loader'
    , exclude: /node_modules/
  });
}

let opts = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: ''

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  , frameworks: config.get('frameworks').concat(['jasmine', 'jasmine-matchers'])

  // list of files / patterns to load in the browser
  , files: config.get('externals').concat(config.get('input'))

  // list of files to exclude
  , exclude: config.get('exclude')

  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  , preprocessors: {
    [config.get('input')]: ['webpack', 'sourcemap']
  }
  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  , reporters: ['spec', 'coverage']

  , specReporter: {
    maxLogLines: 5 // limit number of lines logged per test
    , suppressErrorSummary: false  // do not print error summary
    , suppressFailed: false  // do not print information about failed tests
    , suppressPassed: false  // do not print information about passed tests
    , suppressSkipped: true  // do not print information about skipped tests
    , showSpecTiming: true // print the time elapsed for each spec
  }

  // enable / disable watching file and executing tests whenever any file changes

  , webpack: {
    devtool: 'inline-source-map'
    , resolve: {
      extensions: ['.js', '.jsx']
      , modules: [
        'node_modules'
        , resolve('app', 'javascript', 'packs')
        , resolve('src')
        , resolve('app', 'javascript', '__tests__')
        , resolve('__tests__')
      ]
      , alias: {
        packs: resolve('app', 'javascript', 'packs')
        , src: resolve('src')
        , tests: resolve('app', 'javascript', '__tests__')
        , test: resolve('__tests__')
      }
    }

    , module: {
      rules: loaders
    }
  }

  // , webpackServer: {
  //   noInfo: true
  //   , stats: {
  //     chunks: false
  //   }
  // }

  , coverageReporter: {
    type: 'text-summary'
    , dir: 'coverage/'
    , instrumenterOptions: {
      istanbul: {noCompact: true}
    }
  }
  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  , browsers: ['PhantomJS']

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  , singleRun: true
  , port: 9876
  , colors: true
  , logLevel: config.LOG_INFO
  , autoWatch: true
  , autoWatchBatchDelay: 300
  // Concurrency level
  // how many browser should be started simultanous
  , concurrency: Infinity
  , plugins: plugins
};

module.exports = opts;
