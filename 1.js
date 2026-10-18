const responseTimes = [180, 420, 250, 750, 300, 900, 610];

function findFirstCriticalResponse(responseTimes) {
for (let i = 0; i < responseTimes.length; ++i) {
    const greatestResponse = responseTimes[i];

    if (greatestResponse >= 600) {
        return greatestResponse; 
    } 
}
return -1;
}

console.log(findFirstCriticalResponse(responseTimes));