function startTime(){
  // get the audio player going
var radio = document.createElement("AUDIO");
radio.setAttribute("src","http://blobfolio.com/codepenfiles/atc-flip-clock/390917_AhWilderness.mp3");
radio.setAttribute("id", "radio-player");
radio.setAttribute("loop", "true");
radioBtn = document.getElementById("radio-btn");

radioBtn.addEventListener("click", function(){
	if((' ' + radioBtn.className + ' ').indexOf(' is-active ') > -1){
		radioBtn.className = "btn radio-btn";
		radio.muted = true;
	}

	else {
		radioBtn.className = "btn radio-btn is-active";
		radio.play();
		radio.muted = false;
	}

});
startTime();