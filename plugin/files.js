var _      = require('lodash')
  , config = require('./config');

var files = [];
files.push(config.get("externals"));

var add = config.get("add");
if(!_.isEmpty(add)){
  files.push({pattern:add, included: false});
}

files.push(config.get("input")+config.get("specs"));

module.exports = files;
