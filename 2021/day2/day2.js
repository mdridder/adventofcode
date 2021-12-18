var fs = require('fs');

function parseData(fileName) {
    return fs.readFileSync(fileName).toString().split("\n")
}

function calculate(inputArr, withAim = false) {
    return inputArr.reduce((result, current) => {
        const [ opp, value ] = current.split(' ')
        
        if(opp === 'forward') {
            return { 
                ...result, 
                horizontal: result.horizontal + parseInt(value),
                depth: result.depth + (withAim ? (result.aim * parseInt(value)) : 0),
            }
        } else if (opp === 'down') {
            return { 
                ...result, 
                depth: result.depth + (withAim ? 0 : parseInt(value)),
                aim: result.aim + (withAim ? parseInt(value) : 0),
            }
        } else if (opp === 'up') {
            return { 
                ...result, 
                depth: result.depth - (withAim ? 0 : parseInt(value)),
                aim: result.aim - (withAim ? parseInt(value) : 0),
            }
        } else {
            throw new Error('error')
        }
        
    }, { horizontal: 0, depth: 0, aim: 0 })
}

module.exports = { parseData, calculate }