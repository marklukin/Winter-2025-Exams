// Refactor following solution
// Get day number

//Step 3: create i-indentifier right in the loop

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  for (let i = 0; i < days.length; i++) {
    if (str.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
