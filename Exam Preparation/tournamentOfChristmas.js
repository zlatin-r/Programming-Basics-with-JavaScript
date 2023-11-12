function tournametOfChristmas(input) {
    let index = 0;
    let total_days = Number(input[index]);
    index++;
    let total_money = 0;
    let days_win = 0;
    let days_lose = 0;

    for (let day = 1; day <= total_days; day++) {
        let wins = 0;
        let loses = 0;
        let money_for_today = 0;
        let game = input[index];
        index++;

        while (game != "Finish") {
            let result = input[index];
            index++;
            if (result === "win") {
                money_for_today += 20;
                wins++;
            } else {
                loses++;
            }
            game = input[index];
            index++;
        }
        if (wins > loses) {
            money_for_today *= 1.10;
            days_win++;
        } else {
            days_lose++;
        }
        total_money += money_for_today;
    }
    if (days_win > days_lose) {
        total_money *= 1.20;
        console.log(`You won the tournament! Total raised money: ${total_money.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${total_money.toFixed(2)}`);
    }
}

tournametOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
