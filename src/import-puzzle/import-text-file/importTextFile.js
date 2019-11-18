const fs = require("fs");
const path = require("path");

const importFromTextFileToArray = fileName => {
  try {
    const filePath = path.join(__dirname, "../../../puzzle-text-files/", fileName);

    const fileBuffer = fs.readFileSync(filePath);

    const commaSeparatedLetterString = fileBuffer.toString("utf-8");

    const stringWithoutLineBreakCharacters = commaSeparatedLetterString.replace(/\n/g, ",");

    return stringWithoutLineBreakCharacters.split(",");
  } catch (e) {
    throw new Error(`${fileName} not found in puzzle-text-files directory.`);
  }
};

module.exports = { importFromTextFileToArray };
