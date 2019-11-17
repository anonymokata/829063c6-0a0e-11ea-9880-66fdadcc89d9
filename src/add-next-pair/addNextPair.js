const { createCandidatePairs } = require("../create-candidate-pairs/createCandidatePairs");

const addNextPair = (searchWord, searchPath, letterObject) => {
  const nextLetterPairs = letterObject[searchWord.split("")[searchPath.length]];
  const candidates = createCandidatePairs(searchPath);
  let candidateIndex = 0;

  while (searchPath.length < searchWord.length && candidateIndex < candidates.length) {
    let indexOfMatch = getIndexOfMatch(candidates[candidateIndex], nextLetterPairs);
    let matchedPair = nextLetterPairs[indexOfMatch];

    if (indexOfMatch >= 0) {
      matchedPair.tried = true;
      searchPath.push(matchedPair);

      addNextPair(searchWord, searchPath, letterObject);
    } else if (candidateIndex === candidates.length - 1) {
      //all the candidates have been tried. The last element on the searchPath is wrong and needs to be removed.
      searchPath.pop();
    }
    candidateIndex++;
  }

  return searchPath;
};

const getIndexOfMatch = (candidate, arrayOfPairs) => {
  return arrayOfPairs.findIndex(currentPair => {
    return currentPair.x === candidate.x && currentPair.y === candidate.y;
  });
};

module.exports = { addNextPair, getIndexOfMatch };
