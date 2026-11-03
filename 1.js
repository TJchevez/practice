let coins = 25;

const commands = [
  ["SPEND", 7],
  ["EARN", 10],
  ["SPEND", 4],
  ["EARN", 2],
  ["SPEND", 8],
];

function coinSlot(commands) {
  let wallet = 25;
  for(let i = 0; i < commands.length; ++i) {
    const currentAmount = commands[i];
    const command = currentAmount[0];
    const amount = currentAmount[1]

    if (command === "SPEND") {
      wallet = wallet - amount
    }
    else if (command === "EARN") {
      wallet = wallet + amount
    }
  }
  return wallet;
}

console.log(coinSlot(commands));