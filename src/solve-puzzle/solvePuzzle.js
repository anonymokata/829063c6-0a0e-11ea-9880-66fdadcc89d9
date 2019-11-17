const { searchForWord } = require("../search-for-word/searchForWord");

const solvePuzzle = (searchWords, letterObject) => {
  const foundWords = searchWords.map(searchWord => searchForWord(searchWord, letterObject).toString());

  return foundWords.join("\n");
};

module.exports = { solvePuzzle };
