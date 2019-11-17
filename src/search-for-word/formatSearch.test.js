const { formatSearchPath } = require("./searchForWord");

test("should format results of search for JULIET to return searchWord and comma-separated, parentheses wrapped pairs given searchWord and correct searchPath", () => {
  const searchPath = [
    { x: 2, y: 1, tried: true },
    { x: 3, y: 1, tried: true },
    { x: 4, y: 1, tried: true },
    { x: 5, y: 1, tried: true },
    { x: 6, y: 1, tried: true },
    { x: 7, y: 1, tried: true },
  ];

  const result = formatSearchPath("JULIET", searchPath);

  expect(result).toBe("JULIET: (2,1),(3,1),(4,1),(5,1),(6,1),(7,1)");
});

test("should format results of search for ALPHA to return searchWord and comma-separated, parentheses wrapped pairs given searchWord and correct searchPath", () => {
  const searchPath = [
    { x: 13, y: 13, tried: true },
    { x: 14, y: 14, tried: true },
    { x: 15, y: 15, tried: true },
    { x: 16, y: 16, tried: true },
    { x: 17, y: 17, tried: true },
  ];

  const result = formatSearchPath("ALPHA", searchPath);

  expect(result).toBe("ALPHA: (13,13),(14,14),(15,15),(16,16),(17,17)");
});
