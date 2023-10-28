function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let currentClass = 1;
    let sum_grades = 0;
    let badGradeCounter = 0;
    let flag = false

    while (currentClass <= 12) {
        let grade = Number(input[index]);

        if (badGradeCounter === 2) {
            flag = true
            break;
        }
        if (grade < 4.00) {
            badGradeCounter++;
            continue; 
        }
        
        sum_grades += grade;
        currentClass++;
        index++;
    }
    if (flag){
        console.log(`${name} has been excluded at ${currentClass} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sum_grades/12).toFixed(2)}`)
    }
}

graduation(["Mimi",
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])