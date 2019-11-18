const fs = require("fs");
const path = require("path");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { solvePuzzle } = require("../solve-puzzle/solvePuzzle");

const displaySolution = puzzleTextFile => {
  const result = solvePuzzle(puzzleTextFile);
  result ? console.log(`\n` + result) : undefined;
};

/* istanbul ignore next */
const promptForSelection = () => {
  const fileNames = fs.readdirSync(path.join(__dirname, "../../puzzle-text-files/"));
  fileNames.forEach((fileName, currentIndex) => console.log(`${currentIndex + 1}: ${fileName}`));
  console.log(`${fileNames.length + 1}: exit`);

  readline.question(`\nWhich puzzle? `, puzzleNumber => {
    if (puzzleNumber < fileNames.length + 1) {
      displaySolution(fileNames[puzzleNumber - 1]);
    }
    readline.close();
  });
};

module.exports = { displaySolution, promptForSelection };
