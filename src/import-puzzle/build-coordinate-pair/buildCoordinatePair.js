const buildCoordinatePair = (currentLetter, currentIndex, letterArray) => {
  return {
    letter: currentLetter,
    x: currentIndex % Math.sqrt(letterArray.length),
    y: Math.trunc(currentIndex / Math.sqrt(letterArray.length)),
    tried: false,
  };
};

module.exports = { buildCoordinatePair };
