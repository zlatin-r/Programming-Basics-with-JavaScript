function nameGame(input) {
    let index = 0;
    let name = input[index];
    index++;
    let max_points = 0;
    let winner = "";

    while (name != "Stop") {
        let points = 0;
        for (let i = 0; i < name.length; i++) {
            let numer = Number(input[index]);
            index++;
            if (name.charCodeAt(i) === numer) {
                points += 10;
            } else {
                points += 2;
            }
        }
        if (points >= max_points) {
            max_points = points;
            winner = name;
        }
        name = input[index];
        index++;
    }
    console.log(`The winner is ${winner} with ${max_points} points!`);
}

nameGame(["Ivan",
    "73",
    "20",
    "98",
    "110",
    "Ivo",
    "80",
    "65",
    "87",
    "Stop"])