function newHouse(input) {
    let flowers = input[0];
    let quantity = Number(input[1]);
    let budget = input[2];
    let price = 0;
    let discount = 0;
    
    if (flowers ==  "Roses") {
        price = quantity * 5;
        if (quantity > 80) {
            price *= 0.90
        }
    } else if (flowers == "Dahlias") {
        price = quantity * 3.80;
        if (quantity > 90) {
            price *= 0.85;
        }
    } else if (flowers == "Tulips") {
        price = quantity * 2.80;
        if (quantity > 80) {
            price *= 0.85;
        } 
    } else if (flowers == "Narcissus") {
        price = quantity * 3;
        if (quantity < 120) {
            price *= 1.15;
        } 
    } else if (flowers == "Gladiolus") {
        price = quantity * 2.50;
        if (quantity < 80) {
            price *= 1.20;
        }
    }
    
    let diff = Math.abs(price - budget);
    
    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}

newHouse(["Roses",
"55",
"250"])