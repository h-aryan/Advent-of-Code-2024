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
    continue;
  }

  if (isReportSafeByRemovingOne(report)) {
    totalSafeReports++;
  }
}

function isReportSafeByRemovingOne(report) {
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
    let isModifiedSafe = true;
    let isModifiedIncreasing = true;
    let isModifiedDecreasing = true;

    for (let k = 1; k < modifiedReport.length; k++) {
      let diff = modifiedReport[k] - modifiedReport[k - 1];

      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        isModifiedSafe = false;
        break;
      }

      if (diff > 0) {
        isModifiedDecreasing = false;
      } else if (diff < 0) {
        isModifiedIncreasing = false;
      }
    }

    if (isModifiedSafe && (isModifiedIncreasing || isModifiedDecreasing)) {
      return true;
    }
  }
  return false;
}

console.log(`Number of Safe Reports: ${totalSafeReports}`);
