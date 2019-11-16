const fs = require("fs");
const path = require("path");

const importFromTextFileToArray = fileName => {
  try {
    const filePath = path.join(__dirname, "../puzzle-text-files/", fileName);

    const fileBuffer = fs.readFileSync(filePath);

    const commaSeparatedLetterString = fileBuffer.toString("utf-8");

    const stringWithoutLineBreakCharacters = commaSeparatedLetterString.replace(/\n/g, ",");

    console.log(`${fileName} loaded.`);

    return stringWithoutLineBreakCharacters.split(",");
  } catch (e) {
    console.error(`${fileName} not found.`);
  }
};

module.exports = { importFromTextFileToArray };