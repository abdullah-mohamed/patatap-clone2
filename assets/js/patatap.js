var sound = new Howl({
  src: ['http://localhost:8000/camila.mp3'],
  autoplay: false,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});


$("body").keypress(function(event){
	/*console.log(event.which);
	console.log(sound);*/

	// enter key plays the song and resumes it
	if (event.which === 13){
		console.log('enter is pressed!');
		sound.play();
	}

	// 'p' key pauses the sound
	if (event.which === 112){
		console.log('paused');
		sound.pause();
	}

});