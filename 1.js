const stringifyId = (arr) => {
  const idArray = arr.map(obj => obj.id);


  const uniqueIdArray = [...new Set(idArray)];


  return uniqueIdArray.join(", ");
};



