function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let free_space = width * length * heigth;

    while (command !== "Done" && free_space > 0) {
        free_space -= Number(command);
        command = input[index];
        index++;
    }
    if (command === "Done") {
        console.log(`${free_space} Cubic meters left.`);
    } 
    else {
        console.log(`No more free space! You need ${Math.abs(free_space)} Cubic meters more.`);
    }
}

moving(["10",
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10",
"1",
"2",
"4",
"6",
"Done"])