let _ = require('lodash');
_.uniqWith = require('lodash/uniqWith');
let utils  = require('@djforth/ap_utils').config;
let path        = require('path');

let defaults = {
  frameworks: []
  , externals: [path.resolve('./node_modules/babel-polyfill/dist/polyfill.min.js')]
  , browsers: ['Chrome', 'PhantomJS', 'Safari', 'Firefox']
  // , add: []
  , input: path.resolve('app', 'assets_uncompiled', 'spec', 'test_bundle.js')
  , exclude: []
  , ext: ['.js']
  , plugins: []
  , coffeescript: false
  , jquery: false
};

let config = utils(defaults, 'karma');

module.exports = config;
