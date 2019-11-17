const { calculateDirection } = require("../search-direction/searchDirection");

const createCandidatePairs = searchPath => {
  const lastPair = searchPath[searchPath.length - 1];

  if (searchPath.length === 1) {
    return [
      { x: lastPair.x - 1, y: lastPair.y - 1 },
      { x: lastPair.x - 1, y: lastPair.y },
      { x: lastPair.x, y: lastPair.y - 1 },
      { x: lastPair.x - 1, y: lastPair.y + 1 },
      { x: lastPair.x, y: lastPair.y + 1 },
      { x: lastPair.x + 1, y: lastPair.y - 1 },
      { x: lastPair.x + 1, y: lastPair.y },
      { x: lastPair.x + 1, y: lastPair.y + 1 },
    ];
  } else {
    const direction = calculateDirection(searchPath[0], searchPath[1]);

    return [{ x: lastPair.x + direction.xOffset, y: lastPair.y + direction.yOffset }];
  }
};

module.exports = { createCandidatePairs };
