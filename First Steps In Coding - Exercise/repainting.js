function repainting(input) {
    let nylon_price = 1.50;
    let paint_price = 14.50;
    let tinner_price = 5;
    let bags = 0.40;
    let extra_nylon = 2;

    let nylon_needed = Number(input[0]) + extra_nylon;
    let paint_needed = Number(input[1]);
    let tinner_needed = Number(input[2]);
    let hours_needed = Number(input[3]);

    let extra_paint = paint_needed * 0.10;

    let total_sum = (nylon_needed * nylon_price) + ((paint_needed + extra_paint) * paint_price) + (tinner_needed * tinner_price) + bags;
    let hour_payment = total_sum * 0.30;
    let final_price = total_sum + (hour_payment * hours_needed);

    console.log(final_price);

}

repainting(["10 ", "11 ", "4 ", "8 "])
