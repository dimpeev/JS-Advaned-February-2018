function timer() {
    let counter = 0;
    let timer = null;
    let hoursDisplay = $("#hours");
    let minutesDisplay = $("#minutes");
    let secondsDisplay = $("#seconds");

    $("#start-timer").click(startTimer);
    $("#stop-timer").click(stopTimer);

    function startTimer() {
        if(timer === null) {
            timer = setInterval(timeFunc, 1000);
        }
    };

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    };

    function timeFunc() {
        counter++;
        let seconds = counter % 60;
        let hours = Math.floor(counter / 3600);
        let minutes = Math.floor((counter - (hours * 3600)) / 60);
        $(secondsDisplay).text(seconds < 10 ? "0" + seconds : seconds);
        $(minutesDisplay).text(minutes < 10 ? "0" + minutes : minutes);
        $(hoursDisplay).text(hours < 10 ? "0" + hours : hours);
    };
}
