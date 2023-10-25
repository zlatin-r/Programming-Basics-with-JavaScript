function onTimeForTheExam(input) {
    let exam_hour = Number(input[0]);
    let exam_minutes = Number(input[1]);
    let arrival_hour = Number(input[2]);
    let arrival_minute = Number(input[3]);

    let total_exam_time = (exam_hour * 60) + exam_minutes;
    let total_arrival_time = (arrival_hour * 60) + arrival_minute;

    let total_diff = Math.abs(total_exam_time - total_arrival_time);
    let diff_hour = Math.floor(total_diff / 60);
    let diff_min = total_diff % 60

    if (total_exam_time === total_arrival_time) {
        console.log("On time");

    } else if (total_exam_time < total_arrival_time) {
        console.log("Late");
        if (total_diff >= 60) {
            if (diff_min > 10) {
                console.log(`${diff_hour}:${diff_min} hours after the start`);
            } else {
                console.log(`${diff_hour}:0${diff_min} hours after the start`);
            }      
        } else {
            console.log(`${total_diff} minutes after the start`);
        }
    } else {
        if (total_diff <= 30) {
            console.log("On time");
            console.log(`${total_diff} minutes before the start`);
        } else {
            console.log("Early");
            if (total_diff >= 60) {
                if (diff_min > 10) {
                    console.log(`${diff_hour}:${diff_min} hours before the start`);
                } else {
                    console.log(`${diff_hour}:0${diff_min} hours before the start`);
                }      
            } else {
                console.log(`${total_diff} minutes before the start`);
            }
        }
    }
}    

onTimeForTheExam(["11",
"30",
"10",
"55"])