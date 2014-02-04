var source = "audio/space.mp3"
var audio = document.createElement("audio"); audio.src = source;

$("#playKRNU2").click(function () {
    audio.play();
});

$("#pauseKRNU2").click(function () {
    audio.pause();
});

$("#stopKRNU2").click(function () {
    audio.pause();
    audio.currentTime = 0;
});