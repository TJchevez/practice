const stringifyId = (arr) => {
  const idArray = arr.map (obj => obj.id);

  const uniqueArray = [...new
Set(idArray)];
  return uniqueArray.join(",");
};
