const calculateDirection = (pair1, pair2) => {
  const xOffset = -(pair1.x - pair2.x);
  const yOffset = -(pair1.y - pair2.y);
  return { xOffset: xOffset === -0 ? 0 : xOffset, yOffset: yOffset === -0 ? 0 : yOffset };
};

const searchDirection = Object.freeze({
  HORIZONTAL: { xOffset: 1, yOffset: 0 },
  HORIZONTAL_REVERSE: { xOffset: -1, yOffset: 0 },
  VERTICAL: { xOffset: 0, yOffset: 1 },
  VERTICAL_REVERSE: { xOffset: 0, yOffset: -1 },
  DIAGONAL_UP: { xOffset: 1, yOffset: -1 },
  DIAGONAL_UP_REVERSE: { xOffset: -1, yOffset: 1 },
  DIAGONAL_DOWN: { xOffset: 1, yOffset: 1 },
  DIAGONAL_DOWN_REVERSE: { xOffset: -1, yOffset: -1 },
});

module.exports = { calculateDirection, searchDirection };
