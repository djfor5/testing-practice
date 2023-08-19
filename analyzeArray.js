export default function analyzeArray(arr) {
  const obj = {};

  obj.average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;

  return obj;
}
