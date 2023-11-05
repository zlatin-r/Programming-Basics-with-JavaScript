function specialNumbers(input) {
    let number = input[0];
    let buff = "";
    
    for (let i = 1111; i < 9999; i++) {
        let stringI = String(i);
        let isSpecial = true;
        for (let j = 0; j < stringI.length; j++) {
            let currNumber = Number(stringI[j]);
            if (number % currNumber !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            buff += stringI + " ";
        }
    }
    console.log(buff);
}

specialNumbers(["16"])