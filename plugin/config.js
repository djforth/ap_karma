var _ = require('lodash')
  , utils  = require('@djforth/ap_utils').config
  , path        = require('path')

var defaults = {
  specs      : '/**/*_spec.js'
  , externals  : [path.resolve('./node_modules/babel-polyfill/browser.js')]
  , browsers   : ['Chrome', 'PhantomJS', 'Safari', 'Firefox', 'Opera']
  , add        : []
  , input      : path.resolve('app', 'assets_uncompiled', 'spec')
  , exclude    : []
  , ext        : [ 'es6.js', '.js']
  , plugins    : []
  , transforms : [
      ['rewireify', { ignore: 'moof' }],
      ['babelify', {presets: ['es2015', 'react']}]
    ]
}

var config = utils(defaults, 'karma');

module.exports = config;