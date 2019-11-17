const { createCandidatePairs } = require("../create-candidate-pairs/createCandidatePairs");
const { getIndexOfMatch } = require("../get-index-of-match/getIndexOfMatch");

const addNextPair = (nextLetter, searchWordLength, searchPath, letterObject) => {
  const nextLetterPairs = letterObject[nextLetter];
  const candidates = createCandidatePairs(searchPath);
  let candidateIndex = 0;
  let keepSearching = true;

  while (keepSearching && searchPath.length < searchWordLength && candidateIndex < candidates.length) {
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

module.exports = { addNextPair };
