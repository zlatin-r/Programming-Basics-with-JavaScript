function bestPlayer(input) {
    let index = 0;
    let player = input[index];
    index++;
    let best_player = "";
    let max_goals = 0;
    let hat_rick = false;
    
    while (player != "END") {
        let goals = Number(input[index]);
        index++;
        if (goals > max_goals) {
            hat_rick = false;
            max_goals = goals;
            best_player = player;
            if (goals >= 3) {
                hat_rick = true;
            }
            if (goals >= 10) {
                break;
            }
        }
        player = input[index];
        index++;
    }
    console.log(`${best_player} is the best player!`);
    if (hat_rick) {
        console.log(`He has scored ${max_goals} goals and made a hat-trick !!!`);
    }
    else{
        console.log(`He has scored ${max_goals} goals.`);
    }
}

bestPlayer(["Silva",
"5",
"Harry Kane",
"10",
"Messi",
"3",
"END"])