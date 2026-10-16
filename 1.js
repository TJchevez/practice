const logs = [
    "INFO",
    "ERROR",
    "WARNING",
    "ERROR",
    "INFO",
    "ERROR"
];

function countErrors(logs) {
    let count = 0;
for (let i = 0; i < logs.length; ++i) {
    const errorFound = logs[i]
    if (errorFound === "ERROR") {
        count++;
    }
}
return count;
};

console.log(countErrors(logs));
