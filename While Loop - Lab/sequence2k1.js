function sequence2k1(input) {
    let index = 0;
    let n = input[0];
    let k = 1;

    while (k <= n) {
        console.log(k);
        k = 2 * k + 1
    }
}

sequence2k1(["31"])