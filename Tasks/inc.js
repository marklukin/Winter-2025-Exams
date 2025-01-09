// Refactor following solution
// Increment all numbers in dictionary

// Step 5: changed to more understandable name

'use strict';

const incNumbers = (dict) => {
  for (const key of Object.keys(dict)) {
    if (typeof dict[key] === 'number') {
      dict[key]++;
    }
  }
  return dict;
};

module.exports = incNumbers;
