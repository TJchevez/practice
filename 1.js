const commands = [
  ["ADD", 5],
  ["ADD", 3],
  ["ADD", 10]
];

let total = 0;

for (let i = 0; i < commands.length; i++) {
  const row = commands[i];

  const command = row[0];
  const amount = row[1];

  if (command === "ADD") {
    total = total + amount;
  }

  console.log("total:", total);
}