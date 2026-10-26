const responseTimes = [1.2, 0.5, 2, 0.8];

function convertToMilliseconds(responseTimes) {
const convertedTime = responseTimes.map((times) => {
    return times * 1000;
})
return convertedTime;
}

console.log(convertToMilliseconds(responseTimes));