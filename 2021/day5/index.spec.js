const { parseData, drawLines, part1, part2 } = require("./day5");

describe("Day 5", () => {
  test("Parse data", () => {
    const input = parseData('./day5/input.mock.txt')
    const output = [
        { x1: 0, y1: 9, x2: 5, y2: 9 },
        { x1: 8, y1: 0, x2: 0, y2: 8 },
        { x1: 9, y1: 4, x2: 3, y2: 4 },
        { x1: 2, y1: 2, x2: 2, y2: 1 },
        { x1: 7, y1: 0, x2: 7, y2: 4 },
        { x1: 6, y1: 4, x2: 2, y2: 0 },
        { x1: 0, y1: 9, x2: 2, y2: 9 },
        { x1: 3, y1: 4, x2: 1, y2: 4 },
        { x1: 0, y1: 0, x2: 8, y2: 8 },
        { x1: 5, y1: 5, x2: 8, y2: 2 }
      ]

    expect(input).toEqual(output);
  })  

  test("Draw lines", () => {
    const input = parseData('./day5/input.mock.txt')
    const output = [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 2, 1, 1, 1, 2, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 1, 1, 1, 0, 0, 0, 0]
    ]

    expect(drawLines(input, 10, false)).toEqual(output);
  })

  test("Draw lines with diagonals", () => {
    const input = parseData('./day5/input.mock.txt')
    const output = [
        [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 2, 0, 0],
        [0, 0, 2, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 2, 0, 2, 0, 0],
        [0, 1, 1, 2, 3, 1, 3, 2, 1, 1],
        [0, 0, 0, 1, 0, 2, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [2, 2, 2, 1, 1, 1, 0, 0, 0, 0]
    ]

    expect(drawLines(input, 10)).toEqual(output);
  })

  test("Part 1 mock data", () => {
    const input = parseData('./day5/input.mock.txt')
    const output = 5

    expect(part1(input, 10)).toEqual(output);
  })

  test("Part 2 mock data", () => {
    const input = parseData('./day5/input.mock.txt')
    const output = 12

    expect(part2(input, 10)).toEqual(output);
  })

  test("Result Part 1", () => {
    const input = parseData('./day5/input.txt')
    const output = 6564

    expect(part1(input, 1000)).toEqual(output);
  })

  test("Result Part 2", () => {
    const input = parseData('./day5/input.txt')
    const output = 19172

    expect(part2(input, 1000)).toEqual(output);
  })
});