function playPauseVideo() {
var video = document.getElementById("background-video");
if (video.paused) {
video.play();
} else {
video.pause();
}
}
