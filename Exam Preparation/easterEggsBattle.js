function easterEggsBattle(input) {
    let player_one = Number(input[0]);
    let player_two = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    let end = true;

    while (command !== "End") {
        if (command === "one") {
            player_two--;
        }
        else if (command === "two") {
            player_one--;
        }
        if (player_one === 0) {
            console.log(`Player one is out of eggs. Player two has ${player_two} eggs left.`);
            end = false;
            break;
        }
        else if (player_two === 0) {
            console.log(`Player two is out of eggs. Player one has ${player_one} eggs left.`);
            end = false;
            break;
        }
        command = input[index];
        index++;
    }
    if (end) {
        console.log(`Player one has ${player_one} eggs left.`);
        console.log(`Player two has ${player_two} eggs left.`);
    }
}

easterEggsBattle(["6",
"3",
"one",
"two",
"two",
"one",
"one"])
