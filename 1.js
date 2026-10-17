const statusCodes = [200, 500, 503, 599, 600, 404];

function getServerErrors(statusCodes) {
    const errorDetected  = 500;
    const majorErrordetected = 599;
    const codes = [];

for (let i = 0; i < statusCodes.length; ++i) {
    const serverErrorCode = statusCodes[i];

    if ((serverErrorCode >= errorDetected) && (serverErrorCode <= majorErrordetected)) {
        codes.push(serverErrorCode);
    }
}
return codes;
}

console.log(getServerErrors(statusCodes));
