const palindrome = (str) = => {
return str.split("").every((char, index) => (
char === str [str.length -1 -index]);
))
};