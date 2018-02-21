function createBook(selector, title, author, isbn) {
    let bookGenerator = (function bookGenerator() {
        let id = 1;
        return function (selector, title, author, isbn) {
            let container = $("<div>")
                .attr("id", `book${id}`)
                .css("border", "");
            let t = $("<p>")
                .addClass("title")
                .text(title);
            let a = $("<p>")
                .addClass("author")
                .text(author);
            let i = $("<p>")
                .addClass("isbn")
                .text(isbn);
            let selectButton = $("<button>")
                .click(selectButtonClickEvent)
                .text("Select");
            let deselectButton = $("<button>")
                .click(deselectButtonClickButton)
                .text("Deselect");
            container.append(t)
                .append(a)
                .append(i)
                .append(selectButton)
                .append(deselectButton)
                .appendTo($(selector));

            function selectButtonClickEvent() {
                $(this).parent().css("border", "2px solid blue");
            }

            function deselectButtonClickButton() {
                $(this).parent().css("border", "");
            }

            id++;
        };
    }());

    bookGenerator(selector, title, author, isbn);
}