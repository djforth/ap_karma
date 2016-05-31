#! /usr/bin/env node
var _       = require("lodash")
  , config = require('../plugin/config')
  , Server  = require('karma').Server
  , program = require('commander');


function get_opts(wp){
  var opts = (wp) ? '../plugin/karma_options_webpack' : '../plugin/karma_options';
  return require(opts);
}

program
  .version('0.1.0')
  .option('-b, --browsers', 'test all mac browsers')
  // .option('-ie, --e', 'Test IE11 & Edge browsers')
  .option('-w, --watch', 'Watch tests')
  .option('-wp, --webpack', 'use webpack')
  .parse(process.argv);

if(program.browsers){
  options.browsers = config.get("browsers");
}

if(program.watch) {
  options.singleRun = false;
}

var options = get_opts(program.webpack);
var server = new Server(options)
server.start()