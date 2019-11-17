const { createCandidatePairs } = require("../create-candidate-pairs/createCandidatePairs");

const addNextPair = (searchWord, searchPath, letterObject) => {
  const searchWordArray = searchWord.split("");
  const nextLetterPairs = letterObject[searchWordArray[searchPath.length]];
  const candidates = createCandidatePairs(searchPath);
  let candidateIndex = 0;
  let keepSearching = true;

  while (keepSearching && searchPath.length < searchWord.length && candidateIndex < candidates.length) {
    let indexOfMatch = getIndexOfMatch(candidates[candidateIndex], nextLetterPairs);
    let matchedPair = nextLetterPairs[indexOfMatch];

    if (indexOfMatch >= 0) {
      matchedPair.tried = true;
      searchPath.push(matchedPair);
      keepSearching = false;
    } else {
      candidateIndex++;
    }
  }

  return searchPath;
};

const getIndexOfMatch = (candidate, arrayOfPairs) => {
  return arrayOfPairs.findIndex(currentPair => {
    return currentPair.x === candidate.x && currentPair.y === candidate.y;
  });
};

module.exports = { addNextPair, getIndexOfMatch };
