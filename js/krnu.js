var source = "http://129.93.42.12:8000/listen"
var audio = document.createElement("audio"); audio.src = source;

$("#playKRNU").click(function () {
    audio.play();
});

$("#pauseKRNU").click(function () {
    audio.pause();
});

$("#stopKRNU").click(function () {
    audio.pause();
    audio.currentTime = 0;
});