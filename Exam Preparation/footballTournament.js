function footballTournament(input) {
    let team = input[0];
    let total_games = Number(input[1]);
    let index = 2;
    let total_points = 0;
    let W = 0;
    let D = 0;
    let L = 0;

    if (total_games > 0) {
        for (let i = 0; i < total_games; i++) {
            let result = input[index];
            index++;

            if (result === "W") {
                total_points += 3;
                W++;
            } else if (result === "D") {
                D++;
                total_points += 1;
            } else {
                L++;
            }
        }
        console.log(`${team} has won ${total_points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${W}`);
        console.log(`## D: ${D}`);
        console.log(`## L: ${L}`);
        console.log(`Win rate: ${((W / total_games) * 100).toFixed(2)}%`);
    }
    else {
        console.log(`${team} hasn't played any games during this season.`);
    }
}

footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"])