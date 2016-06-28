var _ = require('lodash');
var config = require('./config')
  , addSpecs = require('./utils/set_specs');
var path = require('path');

var wp_c = path.resolve(config.get('webpack_config'));

var webpackConfig = require(wp_c);
webpackConfig.module.loaders[0].query = {plugins: ['babel-plugin-rewire']};

var preprocessors = {};
var specs = addSpecs(config.get('specs'), config.get('input'));
_.forEach(specs, function(spec){
  preprocessors[spec] = ['webpack'];
});

module.exports = {
  config: webpackConfig
  , externals: {
    'cheerio': 'window'
    , 'react/addons': true
    , 'react/lib/ExecutionEnvironment': true
    , 'react/lib/ReactContext': true
  }
  , middleware: {noInfo: true}
  , preprocessors: preprocessors
};
