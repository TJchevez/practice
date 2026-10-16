const statusCodes = [200, 404, 200, 500, 201, 403, 200];

function getFailedRequests(statusCodes) {
    const errorThreshold = 400;
    const failedRequests = [];

    for (let i = 0; i < statusCodes.length; i++) {
        const currentItem = statusCodes[i];

        if (currentItem >= errorThreshold) {
            failedRequests.push(currentItem);
        }
    }

    return failedRequests;
}

console.log(getFailedRequests(statusCodes));