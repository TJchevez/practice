const classrooms = [
  ["Ana", "Ben"],
  ["Chris", "Dina", "Eli"],
  ["Faith"]
];

for (let i = 0; i < classrooms.length; i++) {
  const row = classrooms[i];

  for (let j = 0; j < row.length; j++) {
    console.log("class:", i);
    console.log("student:", j);
    console.log("name:", row[j]);
  }
}