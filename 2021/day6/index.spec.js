const { parseData, increaseDay, part1 } = require("./day6");

describe("Day 6", () => {
  test("Parse data", () => {
    const input = './day6/input.mock.txt'
    const output = [0, 1, 1, 2, 1, 0, 0, 0, 0]
    
    expect(parseData(input)).toEqual(output);
  })  

  test("Increase a day without new fish", () => {
    const input = [0, 1, 1, 2, 1, 0, 0, 0, 0]
    const output = [1, 1, 2, 1, 0, 0, 0, 0, 0]

    increaseDay(input)
    expect(input).toEqual(output);
  })

  test("Increase a day with fish", () => {
    const input =  [1, 1, 2, 1, 0, 0, 0, 0, 0]
    const output = [1, 2, 1, 0, 0, 0, 1, 0, 1]

    increaseDay(input)
    expect(input).toEqual(output);
  })


  test("Calculate number for 18 Days", () => {
    const data = parseData('./day6/input.mock.txt')
    const output = 26

    expect(part1(data, 18)).toEqual(output)
  })

  test("Calculate number for 80 Days", () => {
    const data = parseData('./day6/input.mock.txt')
    const output = 5934

    expect(part1(data, 80)).toEqual(output)
  })

  test("Calculate number for 256 Days", () => {
    const data = parseData('./day6/input.mock.txt')
    const output = 26984457539

    expect(part1(data, 256)).toEqual(output)
  })

  test("Result Part 1", () => {
    const data = parseData('./day6/input.txt')
    const output = 380243

    expect(part1(data, 80)).toEqual(output)
  })

  test("Result Part 2", () => {
    const data = parseData('./day6/input.txt')
    const output = 1708791884591

    expect(part1(data, 256)).toEqual(output)
  })
});