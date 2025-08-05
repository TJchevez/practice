 const maxCharacter = (str) => {
   const charMap = new Map();
   let max = 0;
   let maxChar = "";


   for (const char of str) {
     charMap.set(char, charMap.get(char) + 1 || 1)
   }


   for (const [char, count] of charMap) {
     if (count > max) {
       max = count;
       maxChar = char;
     }
   }
   return maxChar;
};


