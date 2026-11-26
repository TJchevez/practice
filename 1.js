const commands = [
  "COIN",
  "BUY",
  "COIN",
  "BUY"
];

function processCommands(commands) {
  let health = 10;
  let coins = 7;

  for (let i = 0; i < commands.length; ++i) {
    const currentCommand = commands[i];
    if (currentCommand === "COIN") {
      coins += 3;
    } else if (currentCommand === "HIT") {
      health -= 4;
    } else if (currentCommand === "BUY") {
      if (coins >= 5) {
        coins -= 5;
      } else {
        console.log("Sorry homie, you're broke! LOL")
      }
    } else if (currentCommand === "HEAL") {
      if (health + 2 <= 10) {
        health += 2;
      } else {
        health = 10;
      }
    } else if (currentCommand === "REST") {
      if (health < 10) {
        health += 1;
      }
    }
  }

  return [health, coins];
}

console.log(processCommands(commands));
