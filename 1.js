const arrayChunk2 = (array, size) => {
  const chunkedArray = [];


  for (let i = 0; i < array.length; ++i) {
    if (i % size !== 0) {
      continue;
    }
    const subarray = array.slice(i, i + size);
    chunkedArray.push(subarray);
  }


  return chunkedArray;
};

