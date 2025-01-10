// Refactor following solution
// Reverse dict, exchange keys and values

// Step 1: add 'use strict', follow naming conventions, 
// remove senseless line

'use strict';

const reverse = (dict) => {
  T = Object.keys(dict, 500);
  T.forEach((_) => {
    const v1 = dict[_];
    dict[v1] = _;
    delete dict[_];
  }, 1000);
  return dict;
};

module.exports = reverse;
