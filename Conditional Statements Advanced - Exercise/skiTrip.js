function skiTrip(input) {
    let days = Number(input[0]);
    let type_room = input[1];
    let review= input[2];
    let price = 0;

    if (days < 10) {
        if (type_room === "room for one person") {
            price = 18 * (days - 1);
        } else if (type_room === "apartment") {
            price = 25 * (days - 1);
            price *= 0.70;
        } else if (type_room === "president apartment") {
            price = 35 * (days - 1);
            price *= 0.90;
        }
    } else if (days >= 10 && days <= 15) {
        if (type_room === "room for one person") {
            price = 18 * (days - 1);
        } else if (type_room === "apartment") {
            price = 25 * (days - 1);
            price *= 0.65;
        } else if (type_room === "president apartment") {
            price = 35 * (days - 1);
            price *= 0.85;
        }
    } else if (days > 15) {
        if (type_room === "room for one person") {
            price = 18 * (days - 1);
        } else if (type_room === "apartment") {
            price = 25 * (days - 1);
            price *= 0.50;
        } else if (type_room === "president apartment") {
            price = 35 * (days - 1);
            price *= 0.80;
        }
    } if (review === "positive") {
        price *= 1.25;
    } else {
        price *= 0.90;
    } 
    console.log(price.toFixed(2));
}

skiTrip(["30",
"president apartment",
"negative"])