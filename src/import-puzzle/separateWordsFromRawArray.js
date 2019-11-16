const separateWordsFromRawArray = rawArray => {
  const wordArray = rawArray.filter(word => word.length > 1);

  return wordArray.length > 0 ? wordArray : console.error(`Puzzle is invalid. It contains no search words`);
};

module.exports = { separateWordsFromRawArray };
