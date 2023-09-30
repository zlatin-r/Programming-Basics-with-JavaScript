function vacation_book_list(input) {
    let number_of_pages = Number(input[0]);
    let pages_for_hour = Number(input[1]);
    let vacation_days = Number(input[2]);

    let total_read_time = number_of_pages / pages_for_hour;
    let hours_per_day = total_read_time / vacation_days;
    
    console.log(hours_per_day);
}

vacation_book_list(["212", "20", "2"])
