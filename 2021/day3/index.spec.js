const { parseData, countZerosAndOnes, partOne, partTwo } = require("./day3");

describe("Day 3", () => {
  test("Count zeros and ones", () => {
    const input = parseData('./day3/input.mock.txt')
    const output = [
      { '0': 5, '1': 7 },
      { '0': 7, '1': 5 },
      { '0': 4, '1': 8 },
      { '0': 5, '1': 7 },
      { '0': 7, '1': 5 }]

    expect(countZerosAndOnes(input)).toEqual(output);
  });

  test("Result part 1 - Test Data", () => {
    const input = parseData('./day3/input.mock.txt')
    const output = 198

    expect(partOne(input)).toEqual(output);
  })

  test("Result part 1", () => {
    const input = parseData('./day3/input.txt')
    const output = 3813416

    expect(partOne(input)).toEqual(output);
  })  

  test("Result part 2 - Test Data", () => {
    const input = parseData('./day3/input.mock.txt')
    const output = 230

    expect(partTwo(input)).toEqual(output);
  })

  test("Result part 2", () => {
    const input = parseData('./day3/input.txt')
    const output = 2990784

    expect(partTwo(input)).toEqual(output);
  })  
});