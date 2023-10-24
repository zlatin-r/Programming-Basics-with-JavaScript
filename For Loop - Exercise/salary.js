function salary(input) {
    let opened_tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= input.length; i++) {
        let index = i;
        if (input[index] == "Facebook") {
            salary -= 150;
        } else if (input[index] == "Instagram") {
            salary -= 100;
        } else if (input[index] == "Reddit") {
            salary -= 50;
        } 
    } 
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])