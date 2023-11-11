function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let total = 0;
    
    for (let day = 1; day <= days; day++) {
        let price_per_hour = 0;
        for (let hour = 1; hour <= hours; hour++) {
            if (day % 2 === 0 && hour % 2 === 1) {
                price_per_hour += 2.50;
            }
            else if (day % 2 === 1 && hour % 2 === 0) {
                price_per_hour += 1.25;
            }
            else {
                price_per_hour += 1;
            }
        }
        total += price_per_hour;
        console.log(`Day: ${day} - ${price_per_hour.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

vetParking(["2","5"])