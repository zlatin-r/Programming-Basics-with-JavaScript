function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = (distance * timeForOneMeter) + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeNeeded = totalTime - record;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["10464",
"1500",
"20"])