const responseTimes = [120, 450, 90, 700, 200, 850, 310];

function getSuccessfulResponses(responseTimes) {
const fastTime = 300;
const storage = [];

for (let i = 0; i < responseTimes.length; ++i) {
    const currentTime = responseTimes[i];

    if ( currentTime <= fastTime) {
        storage.push(currentTime)
    }
}
return storage;
}

console.log(getSuccessfulResponses(responseTimes));