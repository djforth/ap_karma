var _ = require("lodash")
  , config = require('./config')
  , addSpecs = require('./utils/set_specs');

var preprocessors = {}
var specs = addSpecs(config.get("specs"), config.get("input"))
_.forEach(specs, function(spec){
  preprocessors[spec] = ['browserify', 'sourcemap'];
});

var browserify = {
  debug: false,
  transform: config.get("transforms"),
  extensions: config.get("ext"),
  bundleDelay: 1000
}

module.exports = {
  browserify      : browserify
  , preprocessors : preprocessors
}