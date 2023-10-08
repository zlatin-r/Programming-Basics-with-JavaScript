function number100_200(input) {
    let num = Number(input[0]);

    if (num < 100) {
        console.log("Less than 100")
    } else if (100 < num < 200) {
        console.log("Between 100 and 200");
    }   else {
        console.log("Greather than 200");
    }
}

number100_200(["95"])