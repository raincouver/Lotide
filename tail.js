// FUNCTION IMPLEMENTATION
const tail = function(arrX) {
  let tailed = [];
  if (typeof arrX !== "object") {
    return tailed;
  } else if (arrX.length === 0) {
    return tailed;
  } else {
    tailed = arrX;
    return tailed.slice(1);
  }
};

module.exports = tail;

