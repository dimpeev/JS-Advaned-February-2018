function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixLinks();

    function createCountry() {
        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();
        addCountryToTable(country, capital);
        fixLinks();
        $("#newCountryText").val("");
        $("#newCapitalText").val("");
    }

    function addCountryToTable(country, capital) {
        let row = $("<tr>")
            .append($("<td>").text(country))
            .append($("<td>").text(capital))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>").click(moveRowUp))
                .append(" ")
                .append($("<a href='#'>[Down]</a>").click(moveRowDown))
                .append(" ")
                .append($("<a href='#'>[Delete]</a>").click(deleteRow))
                .append(" "));
        $(row).css("display", "none");
        $("#countriesTable").append(row);
        row.fadeIn();
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixLinks();
        });
    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertAfter(row.next());
            row.fadeIn();
            fixLinks();
        });
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.remove();
            fixLinks();
        });
    }

    function fixLinks() {
        $("#countriesTable a").css('display', 'inline');
        let tableRows = $("#countriesTable tr");
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none');
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css('display', 'none');
    }
}