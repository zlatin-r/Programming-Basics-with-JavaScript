function santasHoliday(input) {
    let room_for_one = 18;
    let apartment = 25;
    let president_ap = 35;
    let bill = 0;
    let discount = 1;

    let total_days = Number(input[0]) - 1;
    let room = input[1];
    let feedback = input[2];

    if (room === "room for one person") {
        bill = total_days * room_for_one;
    }
    else if ( room === "apartment") {
        bill = total_days * apartment;
        if (total_days < 10) {
            discount = 0.70;
        }
        else if (total_days > 10 && total_days < 15) {
            discount = 0.65;
        }
        else if (total_days > 15) {
            discount = 0.50;
        }
    }
    else if ( room === "president apartment") {
        bill = total_days * president_ap;
        if (total_days < 10) {
            discount = 0.90;
        }
        else if (total_days > 10 && total_days < 15) {
            discount = 0.85;
        }
        else if (total_days > 15) {
            discount = 0.80;
        }
    }
    bill *= discount;
    
    if (feedback === "positive") {
        bill *= 1.25;
    } 
    else if (feedback === "negative") {
        bill *= 0.90;
    }
    console.log(bill.toFixed(2));
}

santasHoliday(["12",
"room for one person",
"positive"])
