const requestTimes = [240, 510, 180, 720, 300, 650, 150];


function getVerySlowRequests(requestTimes) {
    const slowTime = 500;
    const storedTimes = [];
for (let i = 0; i < requestTimes.length; ++i) {
    const currentTime = requestTimes[i];

    if (slowTime < currentTime) {
        storedTimes.push(currentTime)
    }
}
return storedTimes;
}

console.log(getVerySlowRequests(requestTimes));