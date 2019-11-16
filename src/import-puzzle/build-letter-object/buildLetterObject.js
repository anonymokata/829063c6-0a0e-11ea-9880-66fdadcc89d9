const buildLetterObject = letterArray => {
  let letterObject = {};

  const coordinatePairArray = letterArray.map(buildCoordinatePair);

  coordinatePairArray.forEach(coordinatePair => {
    letterObject[coordinatePair.letter]
      ? letterObject[coordinatePair.letter].push({
          x: coordinatePair.x,
          y: coordinatePair.y,
          tried: coordinatePair.tried,
        })
      : (letterObject[coordinatePair.letter] = [{ x: coordinatePair.x, y: coordinatePair.y, tried: coordinatePair.tried }]);
  });

  return letterObject;
};

const buildCoordinatePair = (currentLetter, currentIndex, letterArray) => {
  return {
    letter: currentLetter,
    x: currentIndex % Math.sqrt(letterArray.length),
    y: Math.trunc(currentIndex / Math.sqrt(letterArray.length)),
    tried: false,
  };
};

module.exports = { buildLetterObject, buildCoordinatePair };
