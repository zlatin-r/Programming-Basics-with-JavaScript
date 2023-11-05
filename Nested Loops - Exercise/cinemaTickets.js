function cinemaTickets(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let totalTickets = 0;
    let student = 0;
    let standard = 0;
    let kids = 0;

    while (movie != "Finish") {
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let seats = freeSeats;
        let soldTickets = 0;

        while (freeSeats != 0 && ticketType != "End") {
            freeSeats--;
            totalTickets++;
            soldTickets++;
            
            if (ticketType === "student") {
                student++;
            }
            else if (ticketType === "standard") {
                standard++;
            } else {
                kids++;
            }

            if (freeSeats === 0) {
                break;
            }
            
            ticketType = input[index];
            index++;
        }
        console.log(`${movie} - ${(soldTickets / seats * 100).toFixed(2)}% full.`);
        movie = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])

    cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])