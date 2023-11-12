function excursion(input) {
    let total_people = Number(input[0]);
    let nigths = Number(input[1]);
    let transport_cards = Number(input[2]);
    let museum_tickets = Number(input[3]);
    let price_for_nigth = 20;
    let price_for_transport_card = 1.60;
    let price_for_museum_ticket = 6;

    let total_bill = 0;

    let price_overnigths = nigths * price_for_nigth;
    let transport_cards_price = transport_cards * price_for_transport_card;
    let museum_price = museum_tickets * price_for_museum_ticket;

    total_bill = (price_overnigths + transport_cards_price + museum_price) * total_people;
    total_bill *= 1.25;

    console.log(total_bill.toFixed(2));
}

excursion(["20",
"14",
"30",
"6"])