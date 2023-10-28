function accountBalance(input) {
    let index = 0;
    let balance = 0;
    let operation = input[index];

    while (operation !== "NoMoreMoney") {
        let installment = Number(operation);
        if (installment <= 0) {
            console.log("Invalid operation!");
            break;
        } else {
            balance += installment;
            console.log(`Increase: ${installment.toFixed(2)}`);
            index++;
            operation = input[index];
        }
    } console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])