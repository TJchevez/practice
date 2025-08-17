// COOL SOLUTION (added after video)
const steps2 = (n) => {
  const spacesArray = new Array(n - 1).fill(" ");


  for (let row = 0; row < n; ++row) {
    const hashArray = new Array(row + 1).fill("#");


    const step = [...hashArray, ...spacesArray.slice(0, n - hashArray.length)];


    console.log(step.join(""));
  }
};

