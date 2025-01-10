// Refactor following solution
// Reverse dict, exchange keys and values

// Step 2: use for..of loop, instead of forEach

'use strict';

const reverse = (dict) => {
  for (const key of Object.keys(dict)) {
    const v1 = dict[key];
    dict[v1] = key;
    delete dict[key];
  }
  return dict;
};

module.exports = reverse;
