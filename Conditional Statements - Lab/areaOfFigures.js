function areaOfFigures(input) {
    let figure = input[0]
    let area = 0

    if (figure === "square") {
        let sideA = Number(input[1]);
        area = sideA * sideA;
    } else if (figure === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    } else if (figure === "circle") {
        r = Number(input[1]);
        area = Math.PI * (Math.pow(r, 2));
    } else if (figure === "triangle") {
        side = Number(input[1]);
        h = Number(input[2]);
        area = (side * h) / 2;
    }
    console.log(area.toFixed(3));
}

areaOfFigures(["rectangle", "7", "2.5"])
