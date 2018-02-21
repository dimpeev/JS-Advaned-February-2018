function attachEvents() {
    $("#items li").click(itemClicked);
    $("#showTownsButton").click(showSelectedTowns);

    function itemClicked() {
        console.log($(this).attr("data-selected"))
        if($(this).attr("data-selected")) {
            $(this).css("background", "");
            $(this).removeAttr("data-selected");
            return;
        }
        $(this).css("background", "#DDD");
        $(this).attr("data-selected", "true");
    }

    function showSelectedTowns() {
        let result = $("#items li[data-selected=true]").toArray().map(element => element.textContent).join(", ");
        console.log(result);
        $("#selectedTowns").text("Selected towns: " + result);
    }
}