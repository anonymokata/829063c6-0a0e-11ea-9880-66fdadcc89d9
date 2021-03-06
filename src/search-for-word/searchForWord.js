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

  return formatSearchPath(searchWord, searchPath);
};

const formatSearchPath = (searchWord, searchPath) => {
  if (searchPath.length < 2) {
    return `${searchWord} not found in puzzle.`;
  } else {
    return searchPath.reduce((formattedSolution, currentPair, currentIndex) => {
      return formattedSolution.concat(`(${currentPair.x},${currentPair.y})${currentIndex < searchWord.length - 1 ? "," : ""}`);
    }, `${searchWord}: `);
  }
};

module.exports = { searchForWord, formatSearchPath };
