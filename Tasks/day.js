// Refactor following solution
// Get day number

//Step 2: prefer const over let

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (str.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
