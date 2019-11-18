const { createCandidatePairs } = require("./createCandidatePairs");

test("should return eight possible pairs given searchPath length is one", () => {
  const searchPath = [{ x: 3, y: 1, tried: true }];

  const result = createCandidatePairs(searchPath);

  expect(result.length).toEqual(8);
  expect(JSON.stringify(result)).toEqual(
    '[{"x":2,"y":0},{"x":2,"y":1},{"x":3,"y":0},{"x":2,"y":2},{"x":3,"y":2},{"x":4,"y":0},{"x":4,"y":1},{"x":4,"y":2}]'
  );
});

test("should return one possible pair given searchPath length is two", () => {
  const searchPath = [
    { x: 2, y: 1, tried: true },
    { x: 3, y: 1, tried: true },
  ];

  const result = createCandidatePairs(searchPath);

  expect(result.length).toEqual(1);
  expect(JSON.stringify(result)).toEqual('[{"x":4,"y":1}]');
});

test("should return one possible pair given searchPath length is three", () => {
  const searchPath = [
    { x: 2, y: 1, tried: true },
    { x: 3, y: 1, tried: true },
    { x: 4, y: 1, tried: true },
  ];

  const result = createCandidatePairs(searchPath);

  expect(result.length).toEqual(1);
  expect(JSON.stringify(result)).toEqual('[{"x":5,"y":1}]');
});
