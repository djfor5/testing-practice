export default function capitalize(str) {
  const strArr = str.split("");
  strArr[0] = strArr[0].toUpperCase();
  const capitalizedStr = strArr.join("");

  return capitalizedStr;
}
