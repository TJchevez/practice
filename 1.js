function longestString() {
  let longest = "";
  if (arguments.length === 0) {
    throw new TypeError("At least one string is required");
  }
  for (const arg of arguments) {
    if (arg.length > longest.length) {
      longest = arg;
    }
  }
  return longest;
}
