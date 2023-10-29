function examPreparation(input) {
    let index = 0;
    let poorGrades = Number(input[index]);
    index++;
    let taskName = input[index];
    index++;
    let poorGradeCounter = 0; let problemsCount = 0; let totalGrades  = 0;
    let last_problem = "";
    let enough = false;

    while (taskName !== "Enough") {
        let grade = Number(input[index]);
        problemsCount++;
        totalGrades += grade;

        if (grade <= 4) {
            poorGradeCounter++;
            if (poorGradeCounter === poorGrades) {
                console.log(`You need a break, ${poorGradeCounter} poor grades.`);
                enough = true;
                break;
            }
        }
        index++;
        last_problem = taskName;
        taskName = input[index];
        index++;
    }
    if (enough == false) {
        console.log(`Average score: ${(totalGrades / problemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${last_problem}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])