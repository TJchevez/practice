const highScores = [3000, 5000, 10000]

function functionalScores(highScores) {
    for (let i = 0; i < highScores.length; ++i) {
        const currentScore = highScores[i];
        if (currentScore !== 3000) {
            return ("sigma")
        } else {
            return ("not sigma")
        }
    }
}

console.log(functionalScores(highScores));