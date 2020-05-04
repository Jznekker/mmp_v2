/*
	Keyboard example 
	05.04.2020
*/

//global variables
var backgroundSound;
var slapSound, piupiuSound, easySound, machinegunSound;

function preload() {

	//sounds
	backgroundSound = loadSound("background.mp3");
	easySound = loadSound("ez.mp3");
	piupiuSound = loadSound("piupiu.mp3");
	slapSound = loadSound("slap.mp3");
	machinegunSound = loadSound("tyler1.mp3");

	//images
	rana = loadImage("images/ranapepe.jpg");
	tylerimg = loadImage("images/tylerimg.jpg");
	survivor = loadImage("images/survivor.png");
	slap = loadImage("images/slap.jpg");
	back = loadImage("images/teemo.png");
}

function setup() {
	createCanvas(640, 360);
}

function draw() {
	if (backgroundSound.isPlaying()) {
		background(back);
	} else {
		background('lightgreen');
	}

	if (easySound.isPlaying()) {
		background(rana);
	}

	if (slapSound.isPlaying()) {
		background(slap);
	}

	if (piupiuSound.isPlaying()) {
		background(survivor)
	}

	if (machinegunSound.isPlaying()) {
		background(tylerimg);
	}

	//instructions
	fill('black');
	textSize(20);
	text('Press space, then Q W E R', 200, 50)
}

function keyPressed() {

	//background music
	if (keyCode == 32) {
		if (backgroundSound.isPlaying()) {
			backgroundSound.pause();
		} else {
			backgroundSound.play();
		}
	}

	//sounds effects
	if (keyCode == 81) {  //Q key
		easySound.play();
	}

	if (keyCode == 87) {   //W key
		piupiuSound.play();
	}

	if (keyCode == 69) {  //E key
		slapSound.play();
	}

	if (keyCode == 82) {    //R key
		machinegunSound.play();
	}
}