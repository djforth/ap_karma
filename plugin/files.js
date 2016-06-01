var _      = require('lodash');
var addFiles = require('./utils/set_files')
  , addSpecs = require('./utils/set_specs')
  , config = require('./config');

var files = config.get('externals');
files = (_.isArray(files)) ? files : [files];
files = files.concat(addFiles(config.get('add')));
files = files.concat(addSpecs(config.get('specs'), config.get('input')));

module.exports = files;
