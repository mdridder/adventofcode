const { parseData, convertPatternsToNumbers, calculateDigit, part1, part2 } = require("./day8");

describe("Day 8", () => {
  test("Parse data", () => {
    const input = 'acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf'
    const output = { 
      input: ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"], 
      number: ["cdfeb", "fcadb", "cdfeb", "cdbaf"]
    }
    
    expect(parseData(input)).toEqual(output);
  })
  
  test("Convert patterns to number", () => {
    const input = ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"]
    const input2 = ["febca","cfagb","ecbafd","efdcbg","cbegdfa","fg","bgafec","gfae","acgdb","gfc"]
    const output = { 
      "abcdeg": 0,
      "ab": 1,
      "acdfg": 2,
      "abcdf": 3,
      "abef": 4,
      "bcdef": 5,
      "bcdefg": 6,
      "abd": 7,
      "abcdefg": 8,
      "abcdef": 9
    }
    const output2 = { 
      "bcdefg": 0,
      "fg": 1,
      "abcdg": 2,
      "abcfg": 3,
      "aefg": 4,
      "abcef": 5,
      "abcdef": 6,
      "cfg": 7,
      "abcdefg": 8,
      "abcefg": 9
    }
    
    expect(convertPatternsToNumbers(input)).toEqual(output);
    expect(convertPatternsToNumbers(input2)).toEqual(output2);
  })

  test("Get digit from lookup", () => {
    const lookup = { 
      "abcdeg": 0,
      "ab": 1,
      "acdfg": 2,
      "abcdf": 3,
      "abef": 4,
      "bcdef": 5,
      "bcdefg": 6,
      "abd": 7,
      "abcdefg": 8,
      "abcdef": 9
    }
    const lookup2 = { 
      "bcdefg": 0,
      "fg": 1,
      "abcdg": 2,
      "abcfg": 3,
      "aefg": 4,
      "abcef": 5,
      "abcdef": 6,
      "cfg": 7,
      "abcdefg": 8,
      "abcefg": 9
    }
    const input = ["cdfeb", "fcadb", "cdfeb", "cdbaf"]
    const input2 = ["cgf","facdeb","ecgfdb","afcbge"]
    const output = '5353'
    const output2 = '7609'

    expect(calculateDigit(lookup, input)).toEqual(output);
    expect(calculateDigit(lookup2, input2)).toEqual(output2);
  })

  test("Mock data part 1", () => {
    const input = './day8/input.mock.txt'
    const output = 26

    expect(part1(input)).toEqual(output)
  })

  test("Mock data part 2", () => {
    const input = './day8/input.mock.txt'
    const output = 61229

    expect(part2(input)).toEqual(output)
  })

  test("Result Part 1", () => {
    const input = './day8/input.txt'
    const output = 301

    expect(part1(input)).toEqual(output)
  })

  test("Result Part 2", () => {
    const input = './day8/input.txt'
    const output = 908067

    expect(part2(input)).toEqual(output)
  })
});