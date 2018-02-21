function attachEvents() {
    $(".button").click(selectedButton);

    function selectedButton() {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    }
}