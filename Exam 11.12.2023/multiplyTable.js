function multiplyTable(input) {
    number = input[0];
    for (let i = 1; i <= Number(number[2]); i++) {
        for (let l = 1; l <= Number(number[1]); l++) {
            for (let n = 1; n <= Number(number[0]); n++) {
                console.log(`${i} * ${l} * ${n} = ${i * l * n};`)
            }
        }
    }
}

multiplyTable(["324"])