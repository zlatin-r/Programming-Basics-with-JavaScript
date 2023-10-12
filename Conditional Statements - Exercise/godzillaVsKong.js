function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clouths = Number(input[2]);
    let dekoration = budget * 0.10;
    let discount = 0
    let clouthsPrice = clouths * statists

    if (statists > 150) {
        discount = clouthsPrice * 0.10;
    }

    let total_money_needed = (clouthsPrice - discount)+ dekoration;

    if (total_money_needed > budget) {

        let differrence = total_money_needed - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${differrence.toFixed(2)} leva more.`);
        
    } else {

        let rest_money = budget - total_money_needed;
        console.log("Action!");
        console.log(`Wingard starts filming with ${rest_money.toFixed(2)} leva left.`);
    }
} 

godzillaVsKong(["20000", "120", "55.5"])