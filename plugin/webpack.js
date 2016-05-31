var _ = require("lodash")
  , config = require('./config')
  , addSpecs = require('./utils/set_specs');

var webpackConfig = require(config.get("webpack_config"))
webpackConfig.module.loaders[0].query = {plugins: ['babel-plugin-rewire']}

var preprocessors = {}
var specs = addSpecs(config.get("specs"), config.get("input"))
_.forEach(specs, function(spec){
  preprocessors[spec] = ['webpack'];
});

module.exports = {
  config: webpackConfig
  , middleware: {noInfo: true}
  , preprocessors : preprocessors
}