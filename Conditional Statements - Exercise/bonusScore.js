function bonusScore(input) {
    let points = Number(input[0]);
    let bonusPoints = 0.0;

    if (points <= 100) {
        bonusPoints = 5;
    } else if (points <= 1000) {
        bonusPoints = points * 0.20;
    } else {
        bonusPoints = points * 0.10;
    }

    if (points % 2 === 0) {
        bonusPoints = bonusPoints + 1;
    } else if (points % 10 === 5) {
            bonusPoints = bonusPoints + 2;
    }
    
    let total_points = points + bonusPoints;
    
    console.log(bonusPoints);
    console.log(total_points);
}

bonusScore(["20"])