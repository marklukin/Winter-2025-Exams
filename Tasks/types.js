// Refactor following solution
// Count types in an array

//Step 2: change to arrow function

const types = (arr) => {
  types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of arr) {
    const t = typeof i;
    types_[t]++;
  }
  arr.push('string');
  return types_;
  arr.length;
};

module.exports = types;
