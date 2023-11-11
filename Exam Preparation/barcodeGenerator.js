function barcodeGenerator(input) {
    let start = input[0];
    let end = input[1];
    let buff = "";
    
    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
        for (let y = Number(start[1]); y <= Number(end[1]); y++) {
            for (let k = Number(start[2]); k <= Number(end[2]); k++) {
                for (let l = Number(start[3]); l <= Number(end[3]); l++) {
                    if (i % 2 !== 0 && y % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        buff += `${i}${y}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(buff);
}

barcodeGenerator(["2345",
    "6789"])

