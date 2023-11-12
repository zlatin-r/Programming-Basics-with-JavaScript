function pcGameShop(input) {
    let num_games = Number(input[0]);
    let hearthstone = 0;
    let fortnite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= num_games; i++) {
        let game = input[i]
        if (game === "Hearthstone") {
            hearthstone++;
        } else if ( game === "Fornite") {
            fortnite++;
        } else if (game === "Overwatch") {
            overwatch++;
        } else {
            others++;
        }
    }
    console.log(`Hearthstone - ${(hearthstone/num_games*100).toFixed(2)}%`);
    console.log(`Fornite - ${(fortnite/num_games*100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatch/num_games*100).toFixed(2)}%`);
    console.log(`Others - ${(others/num_games*100).toFixed(2)}%`);
}

pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])