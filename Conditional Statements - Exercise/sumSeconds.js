function sumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let total_time = firstTime + secondTime + thirdTime;
    let seconds = 0;
    let minutes = 0;

    if (total_time < 60) {
        seconds = total_time
    } else if (total_time >= 60) {
        minutes = Math.floor(total_time/60)
        seconds = total_time - minutes
    }
   

    console.log(total_time)
}   

sumSeconds(["35", "45", "44"])
