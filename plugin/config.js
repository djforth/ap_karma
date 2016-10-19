var _ = require('lodash');
_.uniqWith = require('lodash/uniqWith');
var utils  = require('@djforth/ap_utils').config;
var path        = require('path');

var defaults = {
  frameworks: []
  , externals: [path.resolve('./node_modules/babel-polyfill/dist/polyfill.min.js')]
  , browsers: ['Chrome', 'PhantomJS', 'Safari', 'Firefox', 'Opera']
  // , add: []
  , input: path.resolve('app', 'assets_uncompiled', 'spec', 'test_bundle.js')
  , exclude: []
  , ext: ['.js']
  , plugins: []
};

var config = utils(defaults, 'karma');

module.exports = config;
