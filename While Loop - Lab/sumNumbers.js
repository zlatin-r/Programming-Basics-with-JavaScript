function sumNumbers(input) {
    let index = 0;
    let sum = 0;
    let sum_number = Number(input[index]);
    index++;
    
    while (sum < sum_number) {
        current_num = Number(input[index]);
        sum += current_num;
        index++;
    }
    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
