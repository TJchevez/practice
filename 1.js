const commands = ["share", "share", "share", "refill"];

function thanksgivingDinner(commands) {
  let plate = 10;
  for (let i = 0; i < commands.length; ++i) {
    const currentCommand = commands[i];
 
    if (currentCommand === "eat") {
      if (plate -1 <= 0) {
        plate = 0;
      } else {
        plate = plate - 1;
      }
} 
else if (currentCommand === "refill") {
  if (plate + 3 <= 10) {
    plate = plate + 3
} else {
    plate = 10
}
} else if (currentCommand === "share") {
  if (plate - 2 <= 0) {
    plate = 0
  } else {
    plate = plate - 2 
  }
}
    
  }
  return plate
}

console.log(thanksgivingDinner(commands));