const capitalize = (str) => {
  const result = [];
  for (let word of str.split(" ")) {
    const capitalizedWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizedWord);
  }
  return result.join(" ");
};


