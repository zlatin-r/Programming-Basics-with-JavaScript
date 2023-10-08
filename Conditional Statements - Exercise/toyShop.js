function toyShop(input) {
    let puzzle = 2.60;
    let doll = 3 ;
    let teddy_bear = 4.10;
    let mignon = 8.20;
    let truck = 2;
    let discount = 0

    let vaccantionPrice = Number(input[0]);
    let numberPuzzle = Number(input[1]);
    let numberDolls = Number(input[2]);
    let numberTeddyBears = Number(input[3]);
    let numberMignons = Number(input[4]);
    let numberTrucks = Number(input[5]);
    

    total_ordered = numberPuzzle + numberDolls + numberTeddyBears + numberMignons + numberTrucks
    total_bill = (numberPuzzle * puzzle) + (numberDolls * doll) +(numberTeddyBears * teddy_bear) + (numberMignons * mignon) + (numberTrucks * truck)

    if (total_ordered >= 50) {
        discount = total_bill * 0.25
    }

    let rent = (total_bill - discount) * 0.10
    let total = (total_bill - discount) - rent
    let abs_total = total - vaccantionPrice

    if (total > vaccantionPrice) {
        console.log(`Yes! ${abs_total.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${abs_total.toFixed(2)} lv needed.`)
    }

}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
