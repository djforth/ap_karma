#! /usr/bin/env node
var config = require('../plugin/config');
var Server  = require('karma').Server
  , program = require('commander');

function get_opts(wp){
  var opts = '../plugin/karma_options';
  if (wp){
    opts += '_webpack';
  }
  return require(opts);
}

program
  .version('0.1.0')
  .option('-b, --browsers', 'test all mac browsers')
  // .option('-ie, --e', 'Test IE11 & Edge browsers')
  .option('-w, --watch', 'Watch tests')
  .option('-p, --webpack', 'use webpack')
  .parse(process.argv);

var options = get_opts(program.webpack);

if (program.browsers){
  options.browsers = config.get('browsers');
}

if (program.watch){
  options.singleRun = false;
}

var server = new Server(options);
server.start();
