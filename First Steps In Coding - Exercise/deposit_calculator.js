function deposit_calculator(input) {
    let deposit_sum = Number(input[0]);
    let deposit_term = Number(input[1]);
    let annual_interest_rate = Number(input[2]);

    let interest = deposit_sum * (annual_interest_rate/100);
    let interest_for_one_month = interest / 12;
    let total = deposit_sum + deposit_term * interest_for_one_month;

    console.log(total);
}

deposit_calculator(["200 ", "3 ", "5.7 "])
