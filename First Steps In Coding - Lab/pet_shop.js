function pet_shop(input) {
    let dog_food = Number(input[0]);
    let cat_food = Number(input[1]);
    let price_dog_food = 2.50;
    let price_cat_food = 4;
    let total_sum = (dog_food * price_dog_food) + (cat_food * price_cat_food);
    
    console.log(`${total_sum} lv.`);
}

pet_shop(["5 ", "4 "])