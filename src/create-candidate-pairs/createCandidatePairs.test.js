const { createCandidatePairs } = require("./createCandidatePairs");

test("should return eight possible pairs given starting coordinate pair", () => {
  const initialPair = { x: 3, y: 1, tried: true };

  const result = createCandidatePairs(initialPair);

  expect(result.length).toEqual(8);
  expect(JSON.stringify(result)).toEqual(
    '[{"x":2,"y":0},{"x":2,"y":1},{"x":3,"y":0},{"x":2,"y":2},{"x":3,"y":2},{"x":4,"y":0},{"x":4,"y":1},{"x":4,"y":2}]'
  );
});
