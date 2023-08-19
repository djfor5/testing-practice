export default function reverseString(str) {
  const strArr = str.split("");
  const strArrReversed = [];
  while (strArr.length) {
    strArrReversed.push(strArr.pop());
  }
  const strReversed = strArrReversed.join("");

  return strReversed;
}
