function grandpaStavri(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let total_amount = 0;
    let total_degree = 0;

    for (let day = 1; day <= days; day++) {
        let amount = Number(input[index]);
        index++;
        total_amount += amount;
        let degree = Number(input[index]);
        index++
        total_degree += degree * amount;
    }
    final_degree = total_degree / total_amount
    
    console.log(`Liter: ${(total_amount).toFixed(2)}`);
    console.log(`Degrees: ${(final_degree).toFixed(2)}`);

    if (final_degree < 38) {
        console.log("Not good, you should baking!");
    } 
    else if (final_degree <= 42) {
        console.log("Super!");
    }
    else {
        console.log("Dilution with distilled water!");
    }
}

grandpaStavri(["2",
"200",
"43",
"200",
"40"])
