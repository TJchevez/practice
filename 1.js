 const pyramid = (n) => {
  const columnWidth = 2 * n - 1;
  const middle = Math.floor(columnWidth / 2);


  for (let row = 0; row < n; ++row) {
    let step = "";


    for (let column = 0; column < columnWidth; ++column) {
      if (column >= middle - row && column <= middle + row) {
        step += "#"
      }
      else {
        step += " "
      }
    }
    console.log(step)
  }
};
