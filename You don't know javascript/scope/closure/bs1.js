function getNextMonthStart(dateStr) {
    var nextMonth, year;

    {
        let curMonth;
        [ , year, curMonth ] = dateStr.match(
            /(\d{4})-(\d{2})-\d{2}/
        ) || [];

        nextMonth = (Number(curMonth) % 12) + 1;
    }

    if (nextMonth == 1) {
        year++
    }

    return `${year}-${String(nextMonth).padStart(2, "0")}-01`;
}


    let nxt  = getNextMonthStart("2019-12-25");
    console.log(nxt) 
