function getNextMonthStart(datestr) {
    var nextMonth, year;

    {
        let curMonth;
        [, year, curMonth] = datestr.match(/(\d{4})-(\d{2})-\d{2}/) || [];
        nextMonth = (Number(curMonth) % 12) + 1;

    }
    if (nextMonth == 1) {
        year++;
    }

    return `${ year} - ${String(nextMonth).padStart(2, "0")}-01`;
}
console.log(getNextMonthStart("2019-11-25"))