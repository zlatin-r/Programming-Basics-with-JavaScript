function foodForPets(input) {
    let days = Number(input[0]);
    let total_food = Number(input[1]);
    let eaten_by_dog = 0;
    let eaten_by_cat = 0;
    let total_eaten_food = 0;
    let total_biscuits = 0;
    index = 2;

    for (let i = 1; i <= days; i++) {
        let food_for_dog = 0;
        let food_for_cat = 0;
        food_for_dog += Number(input[index]);
        index++;
        food_for_cat += Number(input[index]);
        index++;
        eaten_by_dog += food_for_dog;
        eaten_by_cat += food_for_cat;
        total_eaten_food += food_for_dog + food_for_cat;

        if (i % 3 === 0) {
            let biscuits = (food_for_dog + food_for_cat) * 0.10;
            total_biscuits += biscuits;
        }
    }
    console.log(`Total eaten biscuits: ${Math.round(total_biscuits)}gr.`);
    console.log(`${(total_eaten_food / total_food * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(eaten_by_dog / total_eaten_food * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eaten_by_cat / total_eaten_food * 100).toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])
