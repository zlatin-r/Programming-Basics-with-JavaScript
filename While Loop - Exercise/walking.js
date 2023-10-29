function walking(input) {
    let index = 0;
    let command = input[index];
    index++;

    let goal = 10000;
    let total_steps = 0;
    
    while (total_steps < goal) {
        
        if (command === "Going home") {
            total_steps += Number(input[index]);
            break;
        }

        let steps_today = Number(command);
        total_steps += steps_today;

        command = input[index];
        index++;
    }
    
    if (total_steps < goal) {
        console.log(`${goal - total_steps} more steps to reach goal.`);
    }
    else {
        console.log(`Goal reached! Good job!\n${total_steps - goal} steps over the goal!`);
    }
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])