var source = "http://129.93.42.12:8000/listen"
var audio = document.createElement("audio"); audio.src = source;
	audio.play();
$("#playBtn").click(function () {
    audio.play();
});

$("#pauseBtn").click(function () {
    audio.pause();
});

$("#stopBtn").click(function () {
    audio.pause();
    audio.currentTime = 0;
});