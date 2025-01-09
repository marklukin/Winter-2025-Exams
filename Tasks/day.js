// Refactor following solution
// Get day number

//Step 4: get rid of toLowerCase()

'use strict';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (str) => {
  for (let i = 0; i < days.length; i++) {
    if (str.startsWith(days[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
