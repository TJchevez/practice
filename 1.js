const orders = [
  ["ADD", "pizza", 12],
  ["ADD", "soda", 3],
  ["REMOVE", "pizza", 1],
  ["TOTAL"]
];

for (let i = 0; i < orders.length; i++) {
  const row = orders[i];

  const command = row[0];

  console.log("i:", i);
  console.log("row:", row);
  console.log("command:", command);
}