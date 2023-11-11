function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);

    let raspberiesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberiesPrice * 0.60;
    let bananasPrice = raspberiesPrice * 0.20;

    let totalPrice = (strawberries * strawberriesPrice) + (bananas * bananasPrice) + (raspberries * raspberiesPrice) + (oranges * orangesPrice);

    console.log(totalPrice.toFixed(2));
}

fruitMarket(["48",
"10",
"3.3",
"6.5",
"1.7"])
