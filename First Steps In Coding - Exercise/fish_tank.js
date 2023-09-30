function fish_tank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let full_space = Number(input[3]) / 100;

    let volume = (length * width * height) / 1000;
    let total_water = volume * (1 - full_space);

    console.log(total_water);
}

fish_tank(["85 ", "75 ", "47 ", "17 "])
