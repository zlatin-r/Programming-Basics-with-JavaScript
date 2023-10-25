function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let e_o = "";
    
    if (operator === "+") {
        result = N1 + N2;
        if (result % 2 == 0) {
            e_o = "even";
        } 
        else {
            e_o = "odd";
        }
        console.log(`${N1} + ${N2} = ${result} - ${e_o}`);
    } 
    else if (operator === "-") {
        result = N1 - N2;
        if (result % 2 == 0) {
            e_o = "even";
        } 
        else {
            e_o = "odd";
        }
        console.log(`${N1} - ${N2} = ${result} - ${e_o}`);
    } 
    else if (operator === "*") {
        result = N1 * N2;
        if (result % 2 == 0) {
            e_o = "even";
        } 
        else {
            e_o = "odd";
        }
        console.log(`${N1} * ${N2} = ${result} - ${e_o}`);
    } 
    else if (operator === "/") {
        if (N2 != 0) {;
            result = N1 / N2;
            console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
        } 
        else {
            console.log(`Cannot divide ${N1} by zero`);
        }
    } 
    else if (operator === "%") {
        if (N2 != 0) {
            result = N1 % N2;
            console.log(`${N1} % ${N2} = ${result}`);
        }
        else {
            console.log(`Cannot divide ${N2} by zero`);
        }
    }
}

operationsBetweenNumbers(["7",
"3",
"*"])