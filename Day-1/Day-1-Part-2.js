const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.trim().split("\n");
let numberONleft = [];
let numberONright = [];

lines.forEach((line) => {
  const [leftNum, rightNum] = line.split("  ").map(Number);
  numberONleft.push(leftNum);
  numberONright.push(rightNum);
});

console.log("numberONleft array:", numberONleft);
console.log("numberONright array:", numberONright);

let result = 0;

for (let i = 0; i < numberONleft.length; i++) {
  let count = 0;

  for (let j = 0; j < numberONright.length; j++) {
    if (numberONleft[i] === numberONright[j]) {
      count++;
    }
  }

  result += numberONleft[i] * count;
}
console.log("Total Result:", result);
