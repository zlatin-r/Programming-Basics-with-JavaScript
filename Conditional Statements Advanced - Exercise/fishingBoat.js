function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let rent_price = 0;
    let discount = 0;
    let total = 0;
    
    if (season == "Spring") {
        rent_price = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        rent_price = 4200;
    } else if (season == "Winter") {
        rent_price = 2600;
    }
    
    if (fishermen <= 6) {
        discount = rent_price * 0.10;
    } else if (fishermen > 7 && fishermen <= 11) {
        discount = rent_price * 0.15;
    } else if (fishermen > 12) {
        discount = rent_price * 0.25;
    }
    total = rent_price - discount
    
    if (fishermen % 2 === 0 && season !== "Autumn") {
        total *= 0.95
    }
    
    let diff = Math.abs(total - budget)
    
    if (budget >= total) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}

fishingBoat(["3600",
"Autumn",
"6"])