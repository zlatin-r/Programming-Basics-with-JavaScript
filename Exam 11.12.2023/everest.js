function everest(input) {
    let current_heigth = 5364;
    let index = 0;
    let current_day = 2
    let onTop = false

    while (current_day <= 5) {
 
        let overnight = input[index];
        index++;

        if (overnight === "END") {
            break;
        } 

        let distance = Number(input[index]);
        index++;
        
        current_heigth += distance;
        if (current_heigth >= 8848) {
            onTop = true;
            break;
        }

        if (overnight === "Yes") {
            current_day++;
        } 
    }
    if (onTop) {
        console.log(`Goal reached for ${current_day} days!`);
    } 
    else {
        console.log("Failed!");
        console.log(`${current_heigth}`);
    }
}   

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])

everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])


everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])

everest(["Yes",
"700",
"END"])