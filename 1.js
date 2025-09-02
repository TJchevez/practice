 const anagrams1 = (strA, strB) => {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);


  if (charMapA.size !== charMapB.size) {
    return false;
  }


  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
      return false;
    }
  }


  return true;
};


const buildCharMap = (str) => {
  const charMap = new Map();


  for (const char of removeSpacesAndLowerCase(str)) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }


  return charMap;
}


const removeSpacesAndLowerCase = (str) => {
  return str.toLowerCase().replaceAll(" ", "")
}
