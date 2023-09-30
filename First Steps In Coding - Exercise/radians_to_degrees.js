function radians_to_degrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}

radians_to_degrees(["3.1416"])
