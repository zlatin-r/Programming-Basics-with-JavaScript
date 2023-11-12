function suitcasesLoad(input) {
    let index = 0;
    let load_capacity = Number(input[index]);
    index++;
    let suitcase = input[index];
    index++;
    let full_loaded = true;
    let counter = 0;

    while (suitcase != "End") {
        suitcase = Number(suitcase)
        counter++;
        
        if (counter % 3 === 0) {
            suitcase *= 1.10;
        }
        if (load_capacity - suitcase >= 0) {
            load_capacity -= suitcase;
            } else {
            full_loaded = false;
            counter--;
            break
        }
        suitcase = input[index];
        index++;
    }
    if (full_loaded) {
        console.log("Congratulations! All suitcases are loaded!");
    } else {
        console.log("No more space!");
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}

suitcasesLoad(["550",
"100",
"252",
"72",
"End"])