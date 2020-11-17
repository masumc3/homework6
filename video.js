var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var x = document.querySelector("#volumeSlider").value;
});

document.querySelector("#pause").addEventListener("click", function() {
console.log("Pause Video");
video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
console.log("slower"+video.playbackRate);
video.playbackRate *=.9;
});

//video.playbackRate = video.playbackRate /.9
document.querySelector("#faster").addEventListener("click", function() {
console.log("faster"+video.playbackRate);
video.playbackRate /=.9;
});

document.querySelector("#skip").addEventListener("click", function() {
console.log("video.currentTime"+video.playbackRate);
if (video.currentTime < (video.duration -5)){
video.currentTime +=5;
console.log("skip ahead"+video.currentTime);
//video.currentTime = video.currentTime +5
}else {video.currentTime =0
console.log("going back to start")};
video.play();
});


document.querySelector("#mute").addEventListener("click", function() {
if(video.muted){
video.muted = false;
let sound = document.getElementbyID("mute").innerHTML = "mute";
console.log("Muted");}
	else{
		video.muted = true;
		let sound = document.getElementsByClassName("mute").innerHTML = "unmute";
		console.log("muted")};
});


document.querySelector("#volumeSlider").addEventListener ("change", function() {
	sliderChange();
	setVolume();
});

//document.querySelector("#mute").addEventListener("click", function() {



function sliderChange(val){
	var val = document.querySelector("#volumeSlider").value;
	document.querySelector ("#volume").innerHTML = val + "%";
}
function setVolume(){
	video.volume = document.querySelector("#volumeSlider").value / 100;
}

document.querySelector("#old").addEventListener("click", function() {
video.classList.add("oldTime");
console.log("Grayscale")
});

document.querySelector("#original").addEventListener("click", function() {
video.classList.remove("oldTime");
});
