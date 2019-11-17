const { importFromTextFileToArray } = require("../import-puzzle/import-text-file/importTextFile");
const { separateElementsFromRawPuzzleArray, elementType } = require("../import-puzzle/separate-elements/separateElements");
const { buildLetterObject } = require("../import-puzzle/build-letter-object/buildLetterObject");
const { searchForWord } = require("../search-for-word/searchForWord");

const solvePuzzle = puzzleTextFile => {
  try {
    const rawArray = importFromTextFileToArray(puzzleTextFile);
    const letterArray = separateElementsFromRawPuzzleArray(elementType.LETTERS, rawArray);
    const letterObject = buildLetterObject(letterArray);

    const wordArray = separateElementsFromRawPuzzleArray(elementType.WORDS, rawArray);

    const foundWords = wordArray.map(searchWord => searchForWord(searchWord, letterObject).toString());

    console.log(`${puzzleTextFile} solved.`);
    return foundWords.join("\n");
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = { solvePuzzle };
