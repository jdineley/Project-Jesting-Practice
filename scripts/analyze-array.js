export default function analyzeArray(arr) {
  const obj = {};
  obj.average = arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
  const arrSorted = arr.sort((a, b) => a - b);
  obj.min = arrSorted[0];
  obj.max = arrSorted[arr.length - 1];
  obj.length = arr.length;
  return obj;
}
