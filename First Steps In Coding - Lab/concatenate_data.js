function concatenate_text(input) {
    let first_name = input[0];
    let last_name = input[1];
    let age = input[2];
    let town = input[3];

    console.log(`You are ${first_name} ${last_name}, a ${age}-years old person from ${town}.`);

}

concatenate_text(["Zlatin", "Rusev", "30", "Aytos"])
