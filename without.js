// FUNCTION IMPLEMENTATION
const without = function(source,itemsToRemove) {

  let temp = [];
  let x = [];

  for (let i = 0; i < source.length; i++) {
    temp.push(source[i]);
  }

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (temp[i] === itemsToRemove[j]) {

        temp[i] = "";
      }
    }

    if (temp[i] !== "") {

      x.push(temp[i]);
    }
  }
  return x;
};

module.exports = without;




