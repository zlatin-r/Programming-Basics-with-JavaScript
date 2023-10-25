function cinema(input) {
    let projection_type = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let income = 0;
    let total_seats = rows * colums;
    
    if (projection_type == "Premiere") {
        income = total_seats * 12;
        console.log(income.toFixed(2));
    } else if (projection_type == "Normal") {
        income = total_seats * 7.5;
        console.log(income.toFixed(2));
    } else if (projection_type == "Discount") {
        income = total_seats * 5;
        console.log(income.toFixed(2));
    }
}

cinema(["Premiere",
"10",
"12"])