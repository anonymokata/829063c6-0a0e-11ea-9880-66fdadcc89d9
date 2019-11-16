const { buildCoordinatePair } = require("../build-coordinate-pair/buildCoordinatePair");

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

module.exports = { buildLetterObject };
