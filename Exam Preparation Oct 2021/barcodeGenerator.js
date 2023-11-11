function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let buff = "";
    

    for (let i = start; i < end; i++) {
        let strI = String(i);
        let noEvens = true;
        for (let y = 0; y < strI.length; y++) {
            if (Number(strI[y]) % 2 === 0) {
                noEvens = false;
                break;
            }
        }
        if (noEvens) {
            buff += i + " ";
        }
    }
    console.log(buff);
}

barcodeGenerator(["2345",
    "6789"])

