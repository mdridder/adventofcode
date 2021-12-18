var fs = require('fs');

function parseData(fileName) {
    const data = fs.readFileSync(fileName).toString().trim().split("\n")
    return data.map(line => { 
        const [from, to] = line.split('->').map(point => point.split(',').map(coord => parseInt(coord)))
        const [x1, y1] = from
        const [x2, y2] = to
        return { x1, y1, x2, y2 }
    })
}

function createMap(size) {
    const map = new Array(size)
    for (let i = 0; i < size; i++) {
      map[i] = new Array(size).fill(0)
    }
    return map
}

function drawLines(lines, size, includeDiagonal = true) {
    const map = createMap(size)

    lines.forEach(({x1, y1, x2, y2 }) => {
        const isVertical = x1 === x2
        const isHorizontal = y1 === y2
 
        if (isVertical) {
            const [from, to] = [y1, y2].sort((a, b) => a - b)
            for (let y = from; y <= to; y++) {
                map[y][x1]++
            }
        }

        if (isHorizontal) {
            const [from, to] = [x1, x2].sort((a, b) => a - b)
            for (let x = from; x <= to; x++) {
                map[y1][x]++
            }
        }

        if(includeDiagonal && !isVertical && !isHorizontal) {
            let currentX = x1
            let currentY = y1
            map[currentY][currentX]++

            while (currentX !== x2 && currentY !== y2) {
                currentX += x2 > x1 ? 1 : -1
                currentY += y2 > y1 ? 1 : -1
                map[currentY][currentX]++
            }
        }
    })

    return map
}

function countMoreThanTwo(map) {
    return map
        .map(row => row.filter(column => column >= 2).length)
        .reduce((prev, current) => prev + current)
}

function part1(data, size) {
    const map = drawLines(data, size, false)
    return countMoreThanTwo(map)
}

function part2(data, size) {
    const map = drawLines(data, size, true)
    return countMoreThanTwo(map)
}


module.exports = { parseData, drawLines, part1, part2 }