function project_creation(input) {
    let architect_name = input[0];
    let number_projects = Number(input[1]);
    let time_needed = number_projects * 3;

    console.log(`The architect ${architect_name} will need ${time_needed} hours to complete ${number_projects} project/s.`);

}

project_creation(["George ", "4 "])