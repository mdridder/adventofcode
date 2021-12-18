var fs = require('fs');

function parseData(fileName) {
    return fs.readFileSync(fileName).toString().trim()
        .split(",").map(value => parseInt(value))
}

function calculateFuelBetween(pos1, pos2, expensive) {
    const diff = Math.abs(pos1 - pos2)
    return expensive ? (1 + diff) * diff / 2 : diff
}

function calculateFuel(data, expensive = false) {
    const max = Math.max(...data)
    const fuelNeeded = new Array(max + 1).fill(0); 

    for (let pos1 = 0; pos1 <= max; pos1++) {
        data.forEach(pos2 => {
            fuelNeeded[pos1] += calculateFuelBetween(pos1,pos2, expensive)
        })
    }

    return Math.min(...fuelNeeded)
}


module.exports = { parseData, calculateFuelBetween, calculateFuel }