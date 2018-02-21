function increment(selector) {
    $("<textarea>")
        .addClass("counter")
        .val(0)
        .attr("disabled", "true")
        .appendTo($(selector));
    $("<button>")
        .addClass("btn")
        .attr("id", "incrementBtn")
        .text("Increment")
        .click(() => {
            let value = parseInt($(".counter").val());
            $(".counter").val(++value);
        })
        .appendTo($(selector));
    $("<button>")
        .addClass("btn")
        .attr("id", "addBtn")
        .text("Add")
        .click(() => {
            let value = parseInt($(".counter").val());
            $("<li>").text(value).appendTo($(".results"))
        })
        .appendTo($(selector));
    $("<ul>")
        .addClass("results")
        .appendTo($(selector));
}
