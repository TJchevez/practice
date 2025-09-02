const stringifyId2 = (arr) => {
  const idArray = arr.map(obj => obj.id);
  const uniqueArray = [];
  let idString = "";


  for (let id of idArray) {
    if (!uniqueArray.includes(id)) {
      uniqueArray.push(id);
    }
  }


  for (let i = 0; i < uniqueArray.length; ++i) {
    if (i !== uniqueArray.length - 1) {
      idString += `${uniqueArray[i]}, `;
    }
    else {
      idString += uniqueArray[i];
    }
  }


  return idString;
