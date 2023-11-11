function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let price_per_day = 0;
    let total_price = 0;

    if (season === "Winter") {
        if (destination === "Dubai") {
            price_per_day = 45000;
        }
        else if (destination === "Sofia") {
            price_per_day = 17000;
        }
        else if (destination == "London") {
            price_per_day = 24000;
        }
    }
    else if (season === "Summer") {
        if (destination === "Dubai") {
            price_per_day = 40000;
        }
        else if (destination === "Sofia") {
            price_per_day = 12500;
        }
        else if (destination == "London") {
            price_per_day = 20250;
        }
    }

    if (destination === "Dubai") {
        total_price = (price_per_day * days) * 0.70;
    }
    else if (destination === "Sofia") {
        total_price = (price_per_day * days) * 1.25;
    }
    else {
        total_price = (price_per_day * days);
    }

    if (budget >= total_price) {
        console.log(`The budget for the movie is enough! We have ${(budget - total_price).toFixed(2)} leva left!`);
    }
    else {
        console.log(`The director needs ${(total_price - budget).toFixed(2)} leva more!`);
    }
}

movieDestination(["200000",
"London",
"Summer",
"7"])