function building(input) {
    let flours = Number(input[0]);
    let rooms = Number(input[1]);

    for (i = flours; i > 0; i--) {
        let buff = "";
        for (x = 0; x < rooms; x++) {
            if (i === flours) {
                buff += `L${i}${x} `;
            } else if (i % 2 === 0) {
                buff += `O${i}${x} `;
            } else {
                buff += `A${i}${x} `;
            }
        }
        console.log(buff);
    }
}

building(["6", 
        "4"])
        
