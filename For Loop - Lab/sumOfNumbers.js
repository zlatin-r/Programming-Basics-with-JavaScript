function sumOfNumbers(input) {
    let numToString = String(input[0]);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let digit = Number(numToString[i]);
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"])