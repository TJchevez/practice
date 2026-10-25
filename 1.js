const responseTimes = [1.2, 0.5, 2, 0.8];

function convertToMilliseconds(responseTimes) {
const storage = [];
for (let i = 0; i < responseTimes.length; ++i) {
    const currentTime = responseTimes[i];
    if (currentTime <= 2) {
        storage.push(currentTime);
    }
}
return storage;
}

console.log(convertToMilliseconds(responseTimes));


