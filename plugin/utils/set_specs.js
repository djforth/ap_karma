let _ = require('lodash');

module.exports = function(specs, input){
  if (_.isEmpty(specs)) return [];
  if (_.isArray(specs)){
    return _.map(specs, function(s){
      return input + s;
    });
  }

  return [input + specs];
};
