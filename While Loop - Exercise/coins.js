function coins(input) {
    let change = Number(input[0]);
    let change_st = Math.floor(change * 100);
    let coinsCounter = 0;

    while (change_st > 0) {
        if (change_st >= 200) {
            change_st -= 200;
            coinsCounter++;
        }
        else if (change_st >= 100) {
            change_st -= 100;
            coinsCounter++;
        }
        else if (change_st >= 50) {
            change_st -= 50;
            coinsCounter++;
        }
        else if (change_st >= 20) {
            change_st -= 20;
            coinsCounter++;
        }
        else if (change_st >= 10) {
            change_st -= 10;
            coinsCounter++;
        }
        else if (change_st >= 5) {
            change_st -= 5;
            coinsCounter++;
        }
        else if (change_st >= 2) {
            change_st -= 2;
            coinsCounter++;
        }
        else if (change_st >= 1) {
            change_st -= 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}

coins(["0.58"])
