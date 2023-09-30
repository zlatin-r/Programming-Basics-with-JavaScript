function basketball_equipment(input) {
    let annual_fee = Number(input[0]);

    let shoes = annual_fee * 0.40;
    let clothes = shoes * 0.80;
    let ball = clothes * 0.25;
    let accessories = ball * 0.20;

    let total_price = shoes + clothes + ball +accessories;

    console.log(total_price);

}

basketball_equipment(["365"])
