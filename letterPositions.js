// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  let i = 0;

  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [];
        results[letter].push(i);
      }
      i += 1;
    } else {
      i += 1;
    }
  }

  return results;

  /* for (let j in sentence){
  let letter = sentence[j];
  if (letter !== " ") {
  continue;
  }
  if (!results[letter]) {
    results[letter] = [];
    results[letter].push(j);
  }
  results[letter].push(j);
}

return results; */

};

module.exports = letterPositions;

