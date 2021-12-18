var fs = require('fs');

function parseData(fileName) {
    const data = fs.readFileSync(fileName).toString().trim()
        .split(",").map(value => parseInt(value))

    const buckets = new Array(9).fill(0); 

    data.forEach(fish => { 
        buckets[fish]++
    })
    
    return buckets
}

function increaseDay(buckets) {
    const b = buckets.shift();
    buckets.push(b)
    buckets[6]+=b 
}

function part1(buckets, days) {
    for(let i = 0; i < days; i++) {
        const b = buckets.shift();
        buckets.push(b)
        buckets[6]+=b 
    }

    return buckets.reduce((res,curr) => res + curr, 0)
}


module.exports = { parseData, increaseDay, part1 }