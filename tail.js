// FUNCTION IMPLEMENTATION
const tail = function(arrX) {

  let tailed = [];

  //filter base on type of input
  if (typeof arrX !== "object") {
    return tailed;
  }
  
  //filter base on length and modify to get tail of array
  if (arrX.length !== 0) {
    tailed = arrX;
    return tailed.slice(1);
  }

  //Happy Path
  return tailed;
}
;

module.exports = tail;

