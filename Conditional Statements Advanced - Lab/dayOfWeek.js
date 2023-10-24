function dayOfWeek(input) {
    let num = Number(input[0]);
    
    switch(num) {
        case num = 1: console.log("Monday"); break;
        case num = 2: console.log("Tuesday"); break;
        case num = 3: console.log("Wednesday"); break;
        case num = 4: console.log("Thursday"); break;
        case num = 5: console.log("Friday"); break;
        case num = 6: console.log("Saturday"); break;
        case num = 7: console.log("Sunday"); break;
        default: console.log("Error");
    }
}

dayOfWeek(["6"])