function cleverLily(input) {
    let age = Number(input[0]);
    let washmashine_price = Number(input[1]);
    let toy_price = Number(input[2]);
    let collected_money = 0;
    let gift_money = 10;
    let toy_count = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            collected_money += gift_money;
            gift_money += 10;
            collected_money--
        } else {
            toy_count++;
        }
    } 

    collected_money += toy_count * toy_price;

    if (collected_money >= washmashine_price) {
        let rest = collected_money - washmashine_price;
        console.log(`Yes! ${rest.toFixed(2)}`)
    } else {
        let need = washmashine_price - collected_money;
        console.log(`No! ${need.toFixed(2)}`)
    }
}

cleverLily(["21",
"1570.98",
"3"])