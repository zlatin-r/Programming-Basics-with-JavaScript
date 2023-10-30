function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let cake_size = width * length;
    let piece = input[index];
    index++;

    while (cake_size >= 0) {
        if (piece !== "STOP") {
            cake_size -= Number(piece);
            piece = input[index];
            index++;
        }
        else {
            break;
        }
    }
    if (piece === "STOP") {
        console.log(`${cake_size} pieces are left.`);
    } 
    else {
        console.log(`No more cake left! You need ${Math.abs(cake_size)} pieces more.`);
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