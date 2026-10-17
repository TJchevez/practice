const loadTimes = [420, 180, 650, 90, 310, 140];

function findSlowestLoadTime(loadTimes) {
    let slowestTime = loadTimes[0];
for (let i = 0; i < loadTimes.length; ++i) {
    const currentTime = loadTimes[i];

    if (slowestTime < currentTime) {
        slowestTime = currentTime
    }
}
return slowestTime;
}

console.log(findSlowestLoadTime(loadTimes));