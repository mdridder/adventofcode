const { parseData, part1, part2 } = require("./day4");

describe("Day 4", () => {
  test("Calculate part 1", () => {
    const input = parseData('./day4/input.mock.txt')
    const output = 4512

    expect(part1(input)).toEqual(output);
  })  

  test("Result Part 1", () => {
    const input = parseData('./day4/input.txt')
    const output = 27027

    expect(part1(input)).toEqual(output)
  })

  test("Calculate part 2", () => {
    const input = parseData('./day4/input.mock.txt')
    const output = 1924

    expect(part2(input)).toEqual(output);
  })  

  test("Result Part 2", () => {
    const input = parseData('./day4/input.txt')
    const output = 36975

    expect(part2(input)).toEqual(output)
  })
});