function school_supplies(input) {
    let pencils_price = 5.80;
    let markers_price = 7.20;
    let detergent_price = 1.20;
    
    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let detergent_litres = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let total_price = (pencils * pencils_price) + (markers * markers_price) + (detergent_litres * detergent_price);
    let final_price = total_price * (1 - discount);

    console.log(final_price)
}   

school_supplies(["2", "3", "4", "25"])
