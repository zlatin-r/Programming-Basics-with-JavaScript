function yard_greening(input) {
    let square_meters = Number(input[0]);
    let one_sq_meter_price = 7.61;
    let total_price = square_meters * one_sq_meter_price;
    let discount = total_price * 0.18;
    let final_price = total_price - discount;

    console.log(`The final price is: ${final_price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yard_greening(["150"]);
