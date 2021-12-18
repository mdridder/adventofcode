var fs = require('fs');

function loadData(fileName) {
    const data = fs.readFileSync(fileName).toString().trim().split("\n")
    return data.map(val => parseData(val))
}

function parseData(entry) {
    const [input, number] = entry.split('|')
    return { input: input.trim().split(' '), number: number.trim().split(' ') }
}

function countOverlap(pattern1, pattern2) {
    let overlaps = 0;
    pattern1.split('').forEach(char => {
        if (pattern2.split('').includes(char)) {
            overlaps++;
        }
    })
    return overlaps;
}

function convertPatternsToNumbers(patterns) {
    const one = patterns.find((pattern) => pattern.length === 2)
    const four = patterns.find((pattern) => pattern.length === 4)

    return patterns.reduce((res, curr) => {
        const pattern = curr.split('').sort().join('')

        if(pattern.length === 2) {
            return { ...res, [pattern]: 1 }
        }
        if(pattern.length === 3) {
            return { ...res, [pattern]: 7 }
        }
        if(pattern.length === 4) {
            return { ...res, [pattern]: 4 }
        }
        if(pattern.length === 7) {
            return { ...res, [pattern]: 8 }
        }
        if(pattern.length === 5) {
            if (countOverlap(one,pattern) === 2) {
                return { ...res, [pattern]: 3 }
            } else {
                if (countOverlap(four,pattern) === 2) {
                    return { ...res, [pattern]: 2 }
                } else {
                    return { ...res, [pattern]: 5 }
                }
            }
        }
        if(pattern.length === 6) {
            if (countOverlap(one,pattern) === 1) {
                return { ...res, [pattern]: 6 }
            } else {
                if (countOverlap(four,pattern) === 3) {
                    return { ...res, [pattern]: 0 }
                } else {
                    return { ...res, [pattern]: 9 }
                }
            }
        }

        return res
    }, {})
}

function calculateDigit(lookup, number) {
    const res = number.reduce((res, curr) => {
        const pattern = curr.split('').sort().join('')
        return res + lookup[pattern].toString()
    }, '')

    return res
}

function part1(fileName) {
    const data = loadData(fileName)
    const res = data.map(item => {
        const lookup = convertPatternsToNumbers(item.input)
        const number = calculateDigit(lookup, item.number)
        return number
    })

    return res.reduce((res, curr) => {
        return res + curr.split('').filter(i => ['1','4','7','8'].includes(i)).length
    }, 0)
}

function part2(fileName) {
    const data = loadData(fileName)
    const res = data.map(item => {
        const lookup = convertPatternsToNumbers(item.input)
        const number = calculateDigit(lookup, item.number)
        return number
    })

    return res.reduce((res, curr) => {
        return res + parseInt(curr)
    }, 0)
}

module.exports = { loadData, parseData, convertPatternsToNumbers, calculateDigit, part1, part2 }