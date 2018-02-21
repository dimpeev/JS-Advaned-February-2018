function domSearch(selector, isCaseSensitive) {
    generateHTML();
    let searchInput = $(".search-controls label input");

    function addItem() {
        let elementValue = $(".add-controls label input").val();
        let list = $(".result-controls ul");

        let item = $("<li>")
            .append($("<a>")
                .addClass("button")
                .text("X")
                .click(deleteItem))
            .append($("<strong>")
                .text(elementValue))
            .appendTo(list);

        search();
    }

    function deleteItem() {
        $(this)
            .parent()
            .remove();
    }

    function search() {
        let searchValue = searchInput.val().trim();
        let allItems = $(".result-controls ul li strong");

        //Hide all items
        allItems
            .parent()
            .css("display", "none");

        //If search string is empty, show all items
        if(searchValue === "") {
            allItems
                .parent()
                .css("display", "");
            return;
        }

        let searchRegex = new RegExp(searchValue, isCaseSensitive ? "" : "i");
        //if search string is not empty
        $(allItems)
            .filter((index, element) => searchRegex.test(element.textContent))
            .parent()
            .css("display", "");
    }

    function generateHTML() {
        $("<div>")
            .addClass("add-controls")
            .append($("<label>")
                .text("Enter text: ")
                .append($("<input>")))
            .append($("<a>")
                .addClass("button")
                .css("display", "inline-block")
                .text("Add")
                .click(addItem))
            .appendTo($(selector));

        $("<div>")
            .addClass("search-controls")
            .append($("<label>")
                .text("Search: ")
                .append($("<input>").on('input', search)))
            .appendTo($(selector));

        $("<div>")
            .addClass("result-controls")
            .append($("<ul>")
                .addClass("items-list"))
            .appendTo($(selector));
    }
}