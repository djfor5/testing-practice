export default function caesarCipher(str, shiftFactor) {
  const strCaesarArr = str.split("");
  for (let i = 0; i < strCaesarArr.length; i++) {
    const currentCharCode = strCaesarArr[i].charCodeAt(0);

    let shiftedCharCode = currentCharCode; // non-letters will NOT be shifted

    const aCharCodeUpper = "A".charCodeAt(0);
    const zCharCodeUpper = "Z".charCodeAt(0);
    const aCharCodeLower = "a".charCodeAt(0);
    const zCharCodeLower = "z".charCodeAt(0);
    const isAToZUpper = currentCharCode >= aCharCodeUpper && currentCharCode <= zCharCodeUpper;
    const isAToZLower = currentCharCode >= aCharCodeLower && currentCharCode <= zCharCodeLower;

    if (isAToZUpper && shiftFactor >= 0) { // A-Z with positive shift
      shiftedCharCode = ((currentCharCode - aCharCodeUpper + shiftFactor) % 26) + aCharCodeUpper;
    } else if (isAToZUpper && shiftFactor < 0) { // A-Z with negative shift
      shiftedCharCode = ((currentCharCode - zCharCodeUpper + shiftFactor) % 26) + zCharCodeUpper;
    } else if (isAToZLower && shiftFactor >= 0) { // a-z with positive shift
      shiftedCharCode = ((currentCharCode - aCharCodeLower + shiftFactor) % 26) + aCharCodeLower;
    } else if (isAToZLower && shiftFactor < 0) { // a-z with negative shift
      shiftedCharCode = ((currentCharCode - zCharCodeLower + shiftFactor) % 26) + zCharCodeLower;
    }

    strCaesarArr[i] = String.fromCharCode(shiftedCharCode);
  }
  const strCaesar = strCaesarArr.join("");

  return strCaesar;
}
