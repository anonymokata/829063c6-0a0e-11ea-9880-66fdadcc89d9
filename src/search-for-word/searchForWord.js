const { addNextPair } = require("../add-next-pair/addNextPair");

const searchForWord = (searchWord, letterObject) => {
  const firstLetterPairs = letterObject[searchWord.split("")[0]];
  let searchPath;
  let firstLetterPairIndex = 0;

  do {
    firstLetterPairs[firstLetterPairIndex].tried = true;
    searchPath = [firstLetterPairs[firstLetterPairIndex]];

    searchPath = addNextPair(searchWord, searchPath, letterObject);

    firstLetterPairIndex++;
  } while (searchPath.length < searchWord.length && firstLetterPairIndex < firstLetterPairs.length);

  return searchPath;
};

module.exports = { searchForWord };
