function readText(input) {
    let index = 0;
    let command = input[index];

    while (command !== "Stop") {
        console.log(command);
        index++;
        command = input[index];
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])