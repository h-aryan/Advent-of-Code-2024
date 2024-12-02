const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").trim();
const reports = input.split("\n").map((line) => line.split(" ").map(Number));

let totalSafeReports = 0;

for (let i = 0; i < reports.length; i++) {
  const report = reports[i];
  let isIncreasing = true;
  let isDecreasing = true;
  let safeReport = true;

  for (let j = 1; j < report.length; j++) {
    let diff = report[j] - report[j - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      safeReport = false;
      break;
    }

    if (diff > 0) {
      isDecreasing = false;
    } else if (diff < 0) {
      isIncreasing = false;
    }
  }

  if (safeReport && (isIncreasing || isDecreasing)) {
    totalSafeReports++;
  }
}

console.log(`Number of Safe Reports: ${totalSafeReports}`);
