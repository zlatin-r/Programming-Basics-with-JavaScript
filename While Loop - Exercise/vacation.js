function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneyHave = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let spendCounter = 0; let days_count = 0;

    while (moneyHave < moneyNeeded) {
        let money = Number(input[index]);
        index++;
        days_count++;
        
        if (command === "spend") {
            moneyHave -= money;
            spendCounter++;

            if (moneyHave < 0) {
                moneyHave = 0;
            }
            if (spendCounter === 5) {
                break;
            }
        }
        else {
            moneyHave += money;
            spendCounter = 0;
        }
        command = input[index];
        index++;
    }
    if (spendCounter === 5) {
        console.log("You can't save the money.");
        console.log(`${days_count}`);
    }
    else {
        console.log(`You saved the money for ${days_count} days.`);
    }
}


vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])