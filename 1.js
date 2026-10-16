// count successful requests

const statusCodes = [200, 404, 201, 500, 204, 403, 200];

function countSuccessfulRequests(statusCodes) {
    const minorStatusCode = 200;
    const majorStatusCode = 300
    let count = 0;

    for (let i = 0; i < statusCodes.length; ++i) {
        const currentItem = statusCodes[i];

        if (currentItem >= minorStatusCode && currentItem < majorStatusCode) {
            ++count;
        }

}
return count;
}

console.log(countSuccessfulRequests(statusCodes));