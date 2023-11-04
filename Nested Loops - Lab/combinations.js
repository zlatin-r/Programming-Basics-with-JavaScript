function combinations(input) {
    let number = Number(input[0]);
    let counter = 0;
    
    for (let x = 0; x <= number; x++) {
        for (let y = 0; y <= number; y++) {
            for (let v = 0; v <= number; v++) {
                if (x + y + v === number) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

combinations(["25"])