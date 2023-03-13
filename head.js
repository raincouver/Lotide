// FUNCTION IMPLEMENTATION
const head = function(arrX) {
  //filter by input's type
  if (typeof arrX !== "object") {
    return arrX;
  } 
  
  //filter by input's length
  if (arrX.length === 0) {
    return undefined;
  } 
  
  //Happy Path
  return arrX[0];
};

module.exports = head;