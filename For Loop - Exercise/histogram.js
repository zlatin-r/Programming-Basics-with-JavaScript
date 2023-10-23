function histogram(input) {
    let index = 0;

    let n = Number(input[index]);

    index++;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for (let i = 1; i <= n; i++) {
        
        let current_num = Number(input[index]);
        index++;

        if (current_num < 200) {
            group1++;
        } else if (200 <= current_num && current_num < 400) {
            group2++;
        } else if (400 <= current_num && current_num < 600) {
            group3++;
        } else if (600 <= current_num && current_num < 800) {
            group4++;
        } else {
            group5++;
        }
    }
    let g1 = group1 / n * 100;
    let g2 = group2 / n * 100;
    let g3 = group3 / n * 100;
    let g4 = group4 / n * 100;
    let g5 = group5 / n * 100;

    console.log(g1.toFixed(2) + "%");
    console.log(g2.toFixed(2) + "%");
    console.log(g3.toFixed(2) + "%");
    console.log(g4.toFixed(2) + "%");
    console.log(g5.toFixed(2) + "%");
}

histogram(["3",
"1",
"2",
"999"])