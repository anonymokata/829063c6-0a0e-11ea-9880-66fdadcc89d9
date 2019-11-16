const separateLettersFromRawArray = rawArray => {
  const letterArray = rawArray.filter(word => word.length === 1);

  if (letterArray.length === 0) {
    console.error(`Puzzle is invalid. It contains no letters`);
  } else if (Math.sqrt(letterArray.length) % 1 !== 0) {
    console.error(`Puzzle is invalid. It is not square.`);
  } else {
    return letterArray;
  }
};

module.exports = { separateLettersFromRawArray };
