const { parseData, calculate } = require("./day2");

describe("Day 2", () => {
  test("Count the increases", () => {
    const input = parseData('./day2/input.mock.txt')
    const output = { 'aim': 0, 'depth': 10, 'horizontal': 15 }

    expect(calculate(input)).toEqual(output);
  });

  test("Count the increases", () => {
    const input = parseData('./day2/input.mock.txt')
    const output = { 'aim': 10, 'depth': 60, 'horizontal': 15 }

    expect(calculate(input, true)).toEqual(output);
  });

  test("Result Part 1", () => {
    const input = parseData('./day2/input.txt')
    const output = 1714950

    const result = calculate(input)

    expect(result.horizontal * result.depth).toEqual(output)
  })

  test("Result Part 2", () => {
    const input = parseData('./day2/input.txt')
    const output = 1281977850

    const result = calculate(input, true)

    expect(result.horizontal * result.depth).toEqual(output)
  })
});