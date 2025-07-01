const reverseString = (str) => {
return str
.split("")
.reduce((accumulator, currentValue) => currentValue + accumulator);
};
