function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[0]);
    index++;
    let starting_points = Number(input[1]);
    index++;
    let count_W = 0;
    let points_W = 0;
    
    for (let i = index; i < input.length; i++) {
        let stage = input[index];
        index++;

        if (stage === "W") {
            points_W += 2000;
            count_W++;
        } else if (stage === "F") {
            points_W += 1200;
        } else {
            points_W += 720;
        }
    }
    console.log(`Final points: ${Math.floor(starting_points + points_W)}`);
    console.log(`Average points: ${Math.floor(points_W / tournaments)}`);
    console.log(`${(count_W / tournaments * 100).toFixed(2)}%`);
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])