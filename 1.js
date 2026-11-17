const commands = [
  ["DAMAGE", 30],
  ["COINS", 50],
  ["SPEND", 18],
  ["HEAL", 12],
  ["SPEND", 7],
  ["DAMAGE", 9],
  ["COINS", 5],
];

function calculateGameStats(commands) {
    let currentHealth = 80;
    let currentCoins = 0;
    for (let i = 0; i < commands.length; ++i) {
        const currentCommand = commands[i];
        const currentAction = currentCommand[0];
        const currentNumber = currentCommand[1];

        if (currentAction === "COINS") {
            currentCoins = currentCoins + currentNumber
        }
        else if (currentAction === "SPEND") {
            currentCoins = currentCoins - currentNumber
        }
        else if (currentAction === "DAMAGE") {
            currentHealth = currentHealth - currentNumber
        }
        else if (currentAction === "HEAL") {
            currentHealth = currentHealth + currentNumber
        }
}
return {coins: currentCoins, health: currentHealth}
}

console.log(calculateGameStats(commands));