const responseTimes = [120, 350, 90, 800, 240, 610];

function findSlowestResponse(responseTimes) {
    let highestNumber = responseTimes[0];
    
for (let i = 0; i < responseTimes.length; ++i) {
    const currentItem = responseTimes[i];
    if (highestNumber < currentItem) {
    highestNumber = currentItem
}
}
return highestNumber;
}

console.log(findSlowestResponse(responseTimes))