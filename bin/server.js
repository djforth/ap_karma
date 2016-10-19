#! /usr/bin/env node
var config = require('../plugin/config');
var Server  = require('karma').Server
  , program = require('commander')
  , options = require('../plugin/karma_options');


program
  .version('0.1.0')
  .option('-b, --browsers', 'test all mac browsers')
  .option('-w, --watch', 'Watch tests')
  .parse(process.argv);

if (program.browsers){
  options.browsers = config.get('browsers');
}

if (program.watch){
  options.singleRun = false;
}

var server = new Server(options);
server.start();
