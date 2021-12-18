const { parseData, count, convert } = require("./day1");

describe("Day 1", () => {
  test("Count the increases", () => {
    const input = parseData('./day1/input.mock.txt')

    expect(count(input)).toEqual(7);
  });

  test("Map the data and count increases", () => {
    const input = parseData('./day1/input.mock.txt')
    const output = [607, 618, 618, 617, 647, 716, 769, 792]
  
    expect(convert(input)).toEqual(output);
    expect(count(convert(input))).toEqual(5);
  });

  test("Results", () => {
    const input = parseData('./day1/input.txt')
    // Part 1
    expect(count(input)).toEqual(1475)
    // Part 2
    expect(count(convert(input))).toEqual(1516)
  })
});