const getIndexOfMatch = (candidate, arrayOfPairs) => {
  return arrayOfPairs.findIndex(currentPair => {
    return currentPair.x === candidate.x && currentPair.y === candidate.y;
  });
};

module.exports = { getIndexOfMatch };
