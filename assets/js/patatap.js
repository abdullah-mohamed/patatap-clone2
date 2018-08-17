/*
Note: chrome doesn't allow howlerjs to get mp3 files using 'file:/' requests
	so I made a server to serve these files to me through http requests
	before running this file you need to execute 'node server.js' from the cmd.
*/

// This makes sure our code is only executed when DOM is ready
window.onload = function(){
	// An event handler for any keyboard letter press
	$('body').on('keypress', function(event) {
		// get the pressed letter, ex : 'q', 'w', 'e'
		var eventKey = event.key;
		var maxHeight = window.innerHeight;						// get the size of the browser window
		var maxWidth = window.innerWidth;

		// paperjs setup stuff
		var canvas = document.getElementById('myCanvas');
		paper.setup(canvas);
		// make the animation
		var color = data[eventKey]['color'];
		var circleX = Math.floor(Math.random() * (maxWidth - 80)) + 40;
		var circleY =  Math.floor(Math.random() * (maxHeight - 80)) + 40;

		var path = new paper.Path.Circle({
			/* check that view.center returns an array[height, width]*/
			center: [circleX, circleY],
			radius: 100,										/* make it greater when you activate the animation */
			fillColor: color
		});

		paper.view.onFrame = function(event) {
			// On each frame, decrement:
                var currentRadius = path.bounds.width / 2,
	                newRadius = currentRadius - 3;
                path.scale(newRadius / currentRadius);
                if(event.count > 35){
                	path.remove();
                }
		}

		// make the sound
		var sound = data[eventKey]['sound'];
		sound.play();
	});
};

/* will be put in a seperate js file when you know how to import data from another js file*/
var data =
	 	{
		q: {
			sound: new Howl({
	  		src : ['http://localhost:8000/bubbles.mp3']
			}),
			color: '#1abc9c'
		},
		w: {
			sound: new Howl({
	  		src : ['http://localhost:8000/clay.mp3']
			}),
			color: '#2ecc71'
		},
		e: {
			sound: new Howl({
	  		src : ['http://localhost:8000/confetti.mp3']
			}),
			color: '#3498db'
		},
		r: {
			sound: new Howl({
	  		src : ['http://localhost:8000/corona.mp3']
			}),
			color: '#9b59b6'
		},
			t: {
			sound: new Howl({
	  		src : ['http://localhost:8000/dotted-spiral.mp3']
			}),
			color: '#34495e'
		},
		y: {
			sound: new Howl({
	  		src : ['http://localhost:8000/flash-1.mp3']
			}),
			color: '#16a085'
		},
		u: {
			sound: new Howl({
	  		src : ['http://localhost:8000/flash-2.mp3']
			}),
			color: '#27ae60'
		},
		i: {
			sound: new Howl({
	  		src : ['http://localhost:8000/flash-3.mp3']
			}),
			color: '#2980b9'
		},
		o: {
			sound: new Howl({
				src : ['http://localhost:8000/glimmer.mp3']
			}),
			color: '#8e44ad'
		},
		p: {
			sound: new Howl({
	  		src : ['http://localhost:8000/moon.mp3']
			}),
			color: '#2c3e50'
		},
		a: {
			sound: new Howl({
	  		src : ['http://localhost:8000/pinwheel.mp3']
			}),
			color: '#f1c40f'
		},
		s: {
			sound: new Howl({
	  		src : ['http://localhost:8000/piston-1.mp3']
			}),
			color: '#e67e22'
		},
			d: {
			sound: new Howl({
	  		src : ['http://localhost:8000/piston-2.mp3']
			}),
			color: '#e74c3c'
		},
		f: {
			sound: new Howl({
	  		src : ['http://localhost:8000/prism-1.mp3']
			}),
			color: '#95a5a6'
		},
		g: {
			sound: new Howl({
	  		src : ['http://localhost:8000/prism-2.mp3']
			}),
			color: '#f39c12'
		},
		h: {
			sound: new Howl({
	  		src : ['http://localhost:8000/prism-3.mp3']
			}),
			color: '#d35400'
		},
		j: {
			sound: new Howl({
	  		src : ['http://localhost:8000/splits.mp3']
			}),
			color: '#1abc9c'
		},
		k: {
			sound: new Howl({
	  		src : ['http://localhost:8000/squiggle.mp3']
			}),
			color: '#2ecc71'
		},
		l: {
			sound: new Howl({
	  		src : ['http://localhost:8000/strike.mp3']
			}),
			color: '#3498db'
		},
		z: {
			sound: new Howl({
	  		src : ['http://localhost:8000/suspension.mp3']
			}),
			color: '#9b59b6'
		},
		x: {
			sound: new Howl({
	  		src : ['http://localhost:8000/timer.mp3']
			}),
			color: '#34495e'
		},
		c: {
			sound: new Howl({
	  		src : ['http://localhost:8000/ufo.mp3']
			}),
			color: '#16a085'
		},
		v: {
			sound: new Howl({
	  		src : ['http://localhost:8000/veil.mp3']
			}),
			color: '#27ae60'
		},
		b: {
			sound: new Howl({
	  		src : ['http://localhost:8000/wipe.mp3']
			}),
			color: '#2980b9'
		},
		n: {
			sound: new Howl({
				src : ['http://localhost:8000/zig-zag.mp3']
			}),
			color: '#8e44ad'
		},
		m: {
			sound: new Howl({
	  		src : ['http://localhost:8000/moon.mp3']
			}),
			color: '#2c3e50'
		}
	};