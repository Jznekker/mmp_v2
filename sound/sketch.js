/*
	Sound example 
	05.04.2020
*/

//global sound variables
var punchSound;
var epicBackground;
var rocky1
var rocky


function preload() {
	punchSound = loadSound("punch.wav")
	epicBackground = loadSound("kojiro.mp3")
	rocky1 = loadImage("rocky1.jpg")
	rocky = loadImage("rocky.jpg")
}

function setup() {
	createCanvas(640, 360);
}

function draw() {
	if (epicBackground.isPlaying()) {
		background(rocky);
	} else {
	background(rocky1);
	}

	var volume = map(mouseY, 0 , height, 1, 0);
	epicBackground.setVolume(volume);

	noStroke();
	fill('white');
	rect(0, mouseY, width, 10);

	var pan = map(mouseX, 0, width, -1, 1);
	epicBackground.pan(pan);

	rect(mouseX, 0, 10, height);
}

function mousePressed() {
	punchSound.play();

	if (epicBackground.isPlaying()) {
		epicBackground.pause();
	} else {
		epicBackground.play();
	}
}