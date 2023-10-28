function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let max_num = Number.MIN_SAFE_INTEGER;
    
    while (command !== "Stop") {
        let num = Number(command);

        if (num > max_num) {
            max_num = num;
        }

        command = input[index];
        index++;
    }
    console.log(max_num)
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])