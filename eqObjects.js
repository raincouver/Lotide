const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // They have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // The value for each key in one object is the same as the value for that same key in the other object
  for (let key1 in object1) {

    if (Array.isArray(object1[key1])) {

      if (!eqArrays(object1[key1],object2[key1])) {

        return false;

      }
    } else if (object1[key1] !== object2[key1]) {

      return false;

    }
  }

  //Happy Path
  return true;

};

module.exports = eqObjects;