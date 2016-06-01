var _ = require('lodash');
var utils  = require('@djforth/ap_utils').config;
var path        = require('path');

var defaults = {
  specs: '/**/*_spec.js'
  , frameworks: []
  , externals: [path.resolve('./node_modules/babel-polyfill/browser.js')]
  , browsers: ['Chrome', 'PhantomJS', 'Safari', 'Firefox', 'Opera']
  , add: []
  , input: path.resolve('app', 'assets_uncompiled', 'spec')
  , exclude: []
  , ext: ['es6.js', '.js']
  , plugins: []
  , transforms: [
    ['rewireify', {ignore: 'moof'}]
    , ['babelify', {presets: ['es2015', 'react']}]
  ]
};

var js = utils({}, 'javascripts');
if (js && js.get('transforms')){
  var transforms = defaults.transforms.concat(js.get('transforms'));
  defaults.transforms = _.uniqWith(transforms, _.isEqual);
}
var config = utils(defaults, 'karma');

module.exports = config;
