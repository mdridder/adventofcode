var fs = require('fs');

function parseData(fileName) {
    return fs.readFileSync(fileName).toString().split("\n")
}

function countZerosAndOnes(inputArr){
    return inputArr.reduce((result, curr) => {
        const code = curr.replace('\r','').split("");
        if (result.length > 0) {
            const newOut = result.map((digitObj, digitIndex) => {
                return { 
                    ...digitObj,
                    [code[digitIndex]]: digitObj[code[digitIndex]] + 1 
                };
            });
            return newOut;
        } else {
            return code
                .map((_) => ({ "0": 0, "1": 0 }))
                .map((digitResult, index) => ({ ...digitResult, [code[index]]: 1 }));
        }
    }, []);
}

function partOne(inputArr) {
    const freq = countZerosAndOnes(inputArr);

    let gamma = "";
    let epsilon = "";
    freq.forEach((digitObj) => {
        if (digitObj["0"] > digitObj["1"]) {
            gamma += "0";
            epsilon += "1";
        } else {
            epsilon += "0";
            gamma += "1";
        }
    });

    const gammaDigit = parseInt(gamma, 2);
    const epsilonDigit = parseInt(epsilon, 2);

    return gammaDigit * epsilonDigit;
}

function partTwo(inputArr){
    const genBin = progressiveFilter("0", "1")
    const scrubBin = progressiveFilter("1", "0")

    const genDigit = parseInt(genBin, 2);
    const scrubDigit = parseInt(scrubBin, 2);

    return genDigit * scrubDigit;

    function progressiveFilter(passNum, failNum) {
        let newArr = inputArr;
        let digit = 0;
        
        while (newArr.length > 1) {
            const freq = countZerosAndOnes(newArr);
            const digitCount = freq[digit];
            newArr = newArr.filter((num) => num[digit] === (digitCount["0"] > digitCount["1"] ? passNum : failNum));
            digit++;
        }

        return newArr[0];
    }
}

module.exports = { parseData, countZerosAndOnes, partOne, partTwo }