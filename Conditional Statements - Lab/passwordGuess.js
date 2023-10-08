function passwordGuess(input) {
    let password = "s3cr3t!P@ssw0rd";
    let gues = input[0];

    if (password === gues) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"])