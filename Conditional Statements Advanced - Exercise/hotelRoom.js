function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartment_price = 0;
    let studio_price = 0;

    if (month === "May" || month === "October") {
        studio_price = 50 * nights;
        apartment_price = 65 * nights;
        if (nights > 14) {
            studio_price *= 0.70;
        }
        else if (nights > 7) {
            studio_price *= 0.95;
        }
    }
    else if (month === "June" || month === "September") {
        studio_price = 75.20 * nights;
        apartment_price = 68.70 * nights;
        if (nights > 14) {
            studio_price *= 0.80;
        }
    }
    else if (month === "July" || month === "August") {
        studio_price = 76 * nights;
        apartment_price = 77 * nights;
    }

    if (nights > 14) {
        apartment_price *= 0.90;
    }

    console.log(`Apartment: ${apartment_price.toFixed(2)} lv.`);
    console.log(`Studio: ${studio_price.toFixed(2)} lv.`);
}

hotelRoom(["June",
"14"])