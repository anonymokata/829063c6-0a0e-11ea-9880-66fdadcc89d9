const createCandidatePairs = initialPair => {
  return [
    { x: initialPair.x - 1, y: initialPair.y - 1 },
    { x: initialPair.x - 1, y: initialPair.y },
    { x: initialPair.x, y: initialPair.y - 1 },
    { x: initialPair.x - 1, y: initialPair.y + 1 },
    { x: initialPair.x, y: initialPair.y + 1 },
    { x: initialPair.x + 1, y: initialPair.y - 1 },
    { x: initialPair.x + 1, y: initialPair.y },
    { x: initialPair.x + 1, y: initialPair.y + 1 },
  ];
};

module.exports = { createCandidatePairs };
