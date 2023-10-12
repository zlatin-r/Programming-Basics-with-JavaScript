function lunchBreak(input) {
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchDuration = restDuration / 8
    let leisureTime = restDuration / 4

    let timeHave = restDuration - (lunchDuration + leisureTime)

    if (timeHave >= episodeDuration) {
        let timeLeft = timeHave - episodeDuration
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        let timeNeeded = episodeDuration - timeHave
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"])
