const fs = require("fs");
const readline = require("readline");

const lineReader = async filepath => {
  const rl = readline.createInterface({
    input: fs.createReadStream(filepath),
    crlfDelay: Infinity
  });
  const lines = ["init"];
  for await (const line of rl) {
    lines.push(line.toString());
  }
  return {
    lines,
    length: lines.length
  };
};

module.exports = lineReader;
