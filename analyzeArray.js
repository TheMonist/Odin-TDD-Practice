const analyzeArray = (array) => {
    return {
        average: array.reduce((a, b) => a + b) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

module.exports = analyzeArray;