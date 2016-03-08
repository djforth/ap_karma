
var config = require('./config');

var preprocessors = {}

var add = config.get("add");
if(!_.isEmpty(add)){
  preprocessors[add] = ['browserify', 'sourcemap'];
}

var specs = config.get("input")+config.get("specs");
preprocessors[specs] = ['browserify', 'sourcemap'];



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