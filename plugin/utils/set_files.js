var _ = require('lodash');

module.exports = function(add){
  if (_.isEmpty(add)) return [];
  if (_.isArray(add)){
    return _.map(add, function(a){
      return {pattern: a, included: false};
    });
  } else if (_.isPlainObject(add)){
    return [add];
  }

  return [{pattern: add, included: false}];
};
