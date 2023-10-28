function minNumber(input) {
    
    let index = 0;
    let command = input[index];
    index++;
    
    let min_num = Number.MAX_SAFE_INTEGER;
        
    while (command !== "Stop") {
        let num = Number(command);
    
        if (num < min_num) {
            min_num = num;
        }
    
        command = input[index];
        index++;
    }
    console.log(min_num)
}
    
    minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
