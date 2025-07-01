const palindrome = (str) => {
const middle = Math.floor (str.length/2);
for (let i=0; i<middle; ++i {
const oppositeIndex = str.length -1 -index;
if (str[i] !== str[oppositeIndex]) { 
    return false
    }
    }
    return true
};