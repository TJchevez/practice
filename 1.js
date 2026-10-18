const responseTimes = [120, 450, 700, 850, 300, 950, 610, 200];

function getModerateResponses(responseTimes) {
const minResponse = 400;
const maxResponse = 800;
const storage = [];

for (let i = 0; i < responseTimes.length; ++i) {
    const currentResponse = responseTimes[i];

    if(currentResponse >= minResponse && currentResponse <= maxResponse) {
        storage.push(currentResponse)
    }
}
return storage;
}

console.log(getModerateResponses(responseTimes));