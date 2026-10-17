const responseTimes = [120, 450, 90, 700, 310, 800, 200];

function countSlowResponses(responseTimes) {
    const slowResponse = 300;
    let num = [];

for(let i = 0; i < responseTimes.length; ++i) {
    const count = responseTimes[i];
    if (slowResponse  < count) {
        num.push(count)
    }
    
}
return num.length;
}

console.log(countSlowResponses(responseTimes))