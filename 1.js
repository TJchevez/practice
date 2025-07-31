const palindrome = (str) => {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString;
};

