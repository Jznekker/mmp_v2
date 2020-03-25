/*
	meme v3
	transformation + animation
	3.25.2020
*/

//global scope
var catOne;
var catTwo;
var catThree;
var catFour;

var chat;

var counter = 0;
var x;
var y;

function preload() {
	catOne = loadImage("cute_cat.jpg");
	catTwo = loadImage("catcat.jpg");
	catThree = loadImage("ccat.jpg");
	catFour = loadImage("catk.jpg");
}

function setup() {
	createCanvas(500, 500);

	x = width - 150;
	y = height - 100;
}

function draw() {
	background('white');

	fill(3, 1, 0);
	noStroke();
	rect(0, 0, width, 250);

	textAlign(LEFT);
	textSize(25);
	textStyle(NORMAL);
	textFont('Verdana');
	text('Day 7 of Quarantine:', 0, 280);

	textAlign(LEFT);
	textSize(25);
	textStyle(NORMAL);
	textFont('Verdana');
	text('I think my cat is starting to hate me', 0, 350);

	if (mouseX < width/2 && mouseY < height/2) {
		image(catOne, 0, 0 , width/2, height/2);
	} else if(mouseX > width/2 && mouseY < height/2) {
		image(catTwo, width/2, 0, width/2, height/2);
	} else {
		image(catOne, 0, 0, width/2, height/2);
	}

	if (mouseIsPressed) {
		image(catFour, 0, 0, width, height);
	}
}	

