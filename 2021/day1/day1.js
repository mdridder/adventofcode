var fs = require('fs');

function parseData(fileName) {
  return fs.readFileSync(fileName).toString().split("\n")
}

function count(inputArr) {
  let increases = 0
  for(let i = 1; i < inputArr.length; i++) {
    const prev = parseInt(inputArr[i-1])
    const current = parseInt(inputArr[i])
    if(prev < current) {
      increases++
    }
  }
  return increases
}

function convert(inputArr) {
  const newArray = []
  for(let i = 0; i < inputArr.length; i++) {
    
    const prev = parseInt(inputArr[i-1])
    const current = parseInt(inputArr[i])
    const next = parseInt(inputArr[i+1])

    if(i > 0 && i < inputArr.length - 1) {
      newArray.push(prev+current+next)
    }
  }

  return newArray
}

module.exports = { parseData, count, convert };