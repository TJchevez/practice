const commands = [
  ["COINS", 50],
  ["DAMAGE", 30],
  ["SPEND", 12],
  ["HEAL", 15],
  ["SPEND", 8],
  ["DAMAGE", 5],
];

function calculateGameStats(commands) {
  let currentHealth = 80;
  let currentCoins = 0;

  for (let i = 0; i < commands.length; ++i) {
    const currentCommand = commands[i];

    const action = currentCommand[0];
    const points = currentCommand[1];

    if (action === "DAMAGE") {
      currentHealth = currentHealth - points;
    } else if (action === "HEAL") {
      currentHealth = currentHealth + points;
    } else if (action === "COINS") {
      currentCoins = currentCoins + points;
    } else if (action === "SPEND") {
      currentCoins = currentCoins - points;
    }
  }
  return { health: currentHealth, coins: currentCoins };
}

console.log(calculateGameStats(commands));
