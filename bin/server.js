#! /usr/bin/env node
var _       = require("lodash")
  , config = require('../plugin/config')
  , Server  = require('karma').Server
  , program = require('commander');

var options = require('../plugin/karma_options');

program
  .version('0.1.0')
  .option('-b, --browsers', 'test all mac browsers')
  // .option('-ie, --e', 'Test IE11 & Edge browsers')
  .option('-w, --watch', 'Watch tests')
  .parse(process.argv);

if(program.browsers){
  options.browsers = config.get("browsers");
}

if(program.watch) {
  options.singleRun = false;
}

var server = new Server(options)
server.start()