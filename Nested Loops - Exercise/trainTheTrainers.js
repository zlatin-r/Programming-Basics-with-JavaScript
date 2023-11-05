function trainTheTrainers(input) {
    let index = 0;
    let judges = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalGrades = 0;
    let assessmentCount = 0;

    while (command !== "Finish") {
        let sumGrades = 0;
        let assessment = command;
        
        for (let i = 0; i < judges; i++) {
            let grade = Number(input[index]);
            assessmentCount++;
            sumGrades += grade;
            index++;
        }
        totalGrades +=  sumGrades;
        console.log(`${assessment} - ${(sumGrades/judges).toFixed(2)}.`);
        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(totalGrades/assessmentCount).toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])