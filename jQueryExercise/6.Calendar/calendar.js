function calendar([day, month, year]) {
    let months = {
        1 : "January",
        2 : "February",
        3 : "March",
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 : "December"
    };
    let daysOfTheWeek = {
        1 : "Mon",
        2 : "Tue",
        3 : "Wed",
        4 : "Thu",
        5 : "Fri",
        6 : "Sat",
        7 : "Sun",
    };
    let daysInMonth = new Date(year, month, 0).getDate();
    let firstDayOfTheMonth = new Date(year, month - 1, 1).getDay();
    let firstDateOfMonthDayOfTheWeek = firstDayOfTheMonth === 0 ? 7 : firstDayOfTheMonth;

    let table = $("<table>")
        .append($("<caption>")
            .text(months[month] + " " + year))
        .append($("<tbody>"));

    //Crete and append header row
    let headerRow = $("<tr>");
    for (let day in daysOfTheWeek) {
        headerRow.append($("<th>").text(daysOfTheWeek[day]));
    }
    table.append(headerRow);

    let daysCounter = 1;
    let monthStart = false;
    //Calculate number of rows for the given month
    let numberOfRows = Math.ceil((daysInMonth + firstDateOfMonthDayOfTheWeek - 1) / 7);

    //Create and append rows for the month
    for (let i = 0; i < numberOfRows; i++) {
        let row = $("<tr>");
        for (let dayOfTheWeek = 1; dayOfTheWeek <= 7; dayOfTheWeek++) {
            let cell = $("<td>");
            if(dayOfTheWeek >= firstDateOfMonthDayOfTheWeek) {
                monthStart = true;
            }
            if(monthStart && daysCounter <= daysInMonth) {
                $(cell).text(daysCounter);
                if(day === daysCounter) {
                    $(cell).addClass("today");
                }
                daysCounter++;
            }
            $(row).append(cell);
        }
        table.append(row);
    }

    //Append calendar to HTML page
    $("#content").append(table);
}