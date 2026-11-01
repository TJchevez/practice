const commands = [
  ["SCORE", 10],
  ["SCORE", 5],
  ["CHECK"],
  ["PENALTY", 3],
  ["SCORE", 8],
  ["CHECK"]
];


function gameScore(commands) {
  let score  = 0;
  const checkedScores = [];

  for(let i = 0; i < commands.length; ++i) {
    const row = commands[i];
    const command = row[0];
    const amount = row[1];
    if (command === "SCORE") {
      score = score + amount;
    } 
    else if (command === "PENALTY") {
      score = score - amount;
    } 
    else if (command === "CHECK") {
      checkedScores.push(score)
    }
    
  }
  return checkedScores;
  
}
console.log(gameScore(commands))