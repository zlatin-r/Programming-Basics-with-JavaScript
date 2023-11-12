function deerOfSanta(input) {
    let day_away = Number(input[0]);
    let total_food = Number(input[1]);
    let first_deer_food = Number(input[2]);
    let second_deer_food = Number(input[3]);
    let third_deer_food = Number(input[4]);

    let first_deer = day_away * first_deer_food;
    let second_deer = day_away * second_deer_food;
    let third_deer = day_away* third_deer_food;

    let food_needed = first_deer + second_deer + third_deer;

    if (total_food >= food_needed) {
        console.log(`${Math.floor(total_food - food_needed)} kilos of food left.`);
    }
    else {
        console.log(`${Math.ceil(food_needed - total_food)} more kilos of food are needed.`);
    }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])