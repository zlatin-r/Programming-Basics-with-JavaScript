function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let total_pieces = width * length;
    let piece = input[index];
    index++;

    while (total_pieces > 0 && piece !== "STOP") {
        total_pieces -= Number(piece);
        piece = input[index];
        index++;
    }
    if (total_pieces <= 0) {
        console.log(`No more cake left! You need ${Math.abs(total_pieces)} pieces more.`);
    } 
    else {
        console.log(`${total_pieces} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

 cake(["10",
 "10",
 "20",
 "20",
 "20",
 "20",
 "21"])