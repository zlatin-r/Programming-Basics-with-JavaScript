function careOfPuppy(input) {
    let index = 0;
    let total_food = Number(input[index]) * 1000;
    index++;
    let eaten_food = input[index];
    index++;

    while (eaten_food != "Adopted") {
        eaten_food = Number(eaten_food);

        total_food -= eaten_food;
        eaten_food = input[index];
        index++;
    }
    if (total_food >= 0) {
        console.log(`Food is enough! Leftovers: ${total_food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(total_food)} grams more.`);
    }
}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])