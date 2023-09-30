function food_delivery(input) {
    let chicken_menu = 10.35;
    let fish_menu = 12.40; 
    let vegetarian_menu = 8.15;
    let delivery_price = 2.50;

    let number_chicken_menus = Number(input[0]);
    let number_fish_menus = Number(input[1]);
    let number_vegetarian_menus = Number(input[2]);

    total_bill = (chicken_menu * number_chicken_menus) + (fish_menu * number_fish_menus) + (vegetarian_menu * number_vegetarian_menus);
    desert_price = total_bill * 0.20;
    final_bill = total_bill + desert_price + delivery_price;

    console.log(final_bill);

} 

food_delivery(["2 ", "4 ", "3 "])
