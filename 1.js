const responseTimes = [420, 180, 650, 90, 310, 140];

function findFirstFastResponse(responseTimes) {
for (let i = 0; i < responseTimes.length; ++i) {
    const fastestTime = responseTimes[i];

    if(fastestTime < 200) {
        return i
    }

}
return -1;
}

console.log(findFirstFastResponse(responseTimes));