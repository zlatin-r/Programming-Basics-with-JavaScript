function trekkingMania(input) {
    let groups = Number(input[0]);
    let total_clibers = 0
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0
    let k2 = 0
    let everest = 0
    
    for (let i = 1; i <= groups; i++) {

        let current_group = Number(input[i]);
        total_clibers += current_group;

        if (current_group <= 5) {
            musala += current_group;
        } else if (current_group <= 12) {
            monblan += current_group;
        } else if (current_group <= 25) {
            kilimanjaro += current_group;
        } else if (current_group <= 40) {
            k2 += current_group;
        } else {
            everest += current_group;
        }
    }
    console.log(`${(musala / total_clibers * 100).toFixed(2)}%`);
    console.log(`${(monblan / total_clibers * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / total_clibers * 100).toFixed(2)}%`);
    console.log(`${(k2 / total_clibers * 100).toFixed(2)}%`);
    console.log(`${(everest / total_clibers * 100).toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])