function numberPyramid(input) {
    let num = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrent = "";

    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            printCurrent+= current + " ";
            current++;
        }
        console.log(printCurrent);
        printCurrent = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["7"])