function equalSumsEvenOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";

    for (let num = start; num <= end; num++) {
        let currentNum = "" + num;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j)) 
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${num} `;
        }
    }
    console.log(printLine);
}

equalSumsEvenOddPosition(["299900",
"300000"])
