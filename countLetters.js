// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {

    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = 1;
      continue;
    }

    //Happy Path
    results[letter] += 1;
  }

  return results;
};

module.exports = countLetters;