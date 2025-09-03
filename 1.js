const arrayChunk = (array, size) => {
  const chunkedArray = [];


  for (let i = 0; i < array.length; i += size) {
    const subarray = array.slice(i, i + size);
    chunkedArray.push(subarray);
  }


  return chunkedArray;
};
