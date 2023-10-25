function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let stays = "";
    
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            stays = "Camp";
            budget *= 0.30;
        } else if (season === "winter") {
            stays = "Hotel";
            budget *= 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            stays = "Camp";
            budget *= 0.40;
        } else if (season === "winter") {
            stays = "Hotel";
            budget *= 0.80;
        }
    } else {
        destination = "Europe";
        stays = "Hotel";
        budget *= 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${stays} - ${budget.toFixed(2)}`);
}

journey(["678.53", "winter"])
