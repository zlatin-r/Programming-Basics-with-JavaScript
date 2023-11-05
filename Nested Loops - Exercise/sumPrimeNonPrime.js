function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumPrimes = 0;
    let sumNonPrimes = 0;
    let isPrime = true;

    while (command != "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        } else {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    isPrime = false;
                    break;
                } else {
                    isPrime = true;
                }
            }
            if (isPrime) {
                sumPrimes += currentNum;
            } else {
                sumNonPrimes += currentNum;
            }
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`);
}

sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])
