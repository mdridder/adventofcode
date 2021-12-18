const { parseData, calculateFuelBetween, calculateFuel } = require("./day7");

describe("Day 7", () => {
  test("Parse data", () => {
    const input = './day7/input.mock.txt'
    const output = [16,1,2,0,4,2,7,1,2,14]
    
    expect(parseData(input)).toEqual(output);
  })

  test("Calculate fuel needed", () => {
    expect(calculateFuelBetween(16, 2, false)).toEqual(14)
    expect(calculateFuelBetween(16, 5, true)).toEqual(66)
  })

  test("Mock data part 1", () => {
    const data = parseData('./day7/input.mock.txt')
    const output = 37

    expect(calculateFuel(data, false)).toEqual(output)
  })

  test("Mock data part 2", () => {
    const data = parseData('./day7/input.mock.txt')
    const output = 168

    expect(calculateFuel(data, true)).toEqual(output)
  })

  test("Result Part 1", () => {
    const data = parseData('./day7/input.txt')
    const output = 342641

    expect(calculateFuel(data, false)).toEqual(output)
  })

  test("Result Part 2", () => {
    const data = parseData('./day7/input.txt')
    const output = 93006301

    expect(calculateFuel(data, true)).toEqual(output)
  })
});