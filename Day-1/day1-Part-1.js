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

numberONleft.sort((a, b) => a - b);
numberONright.sort((a, b) => a - b);

let difference = 0;
for (let i = 0; i < numberONleft.length; i++) {
  difference += Math.abs(numberONleft[i] - numberONright[i]);
}

console.log("Total Difference:", difference);
