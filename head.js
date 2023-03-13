// FUNCTION IMPLEMENTATION
const head = function(arrX) {
  if (typeof arrX !== "object") {
    return arrX;
  } else if (arrX.length === 0) {
    return undefined;
  } else {
    return arrX[0];
  }
};

module.exports = head;