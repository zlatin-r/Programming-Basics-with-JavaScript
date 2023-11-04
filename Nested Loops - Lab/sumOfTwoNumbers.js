function sumOfTwoNumbers(input) {
    let magicNum = Number(input[2]);
    let start = Number(input[0]);
    let end = Number(input[1]);
    let combinationCounter = 0;
    let isFound = false;

    for (let i = start; i <= end; i++) {
        for (let l = start; l <= end; l++) {
            let sum = i + l;
            combinationCounter++;
            if (sum === magicNum) {
                console.log(`Combination N:${combinationCounter} (${i} + ${l} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}


sumOfTwoNumbers(["1",
    "10",
    "5"])

sumOfTwoNumbers(["88",
    "888",
    "1000"])