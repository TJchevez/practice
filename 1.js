const anagrams = (strA, strB) => {
  return cleanString(strA) === cleanString(strB);
};


const cleanString = (str) => {
  return str.replaceAll(" ", "").toLowerCase().split("").sort().join("");
};
