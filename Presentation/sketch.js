/*
	Final Project pitch
	05.07.2020
*/

var currentSlide = 0;
var numberOfSlides = 3;

//next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

//previous button
var prevButtonX = 10
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 8;
var prevButtonH = nextButtonH;

function setup() {
	createCanvas(960, 720);
}

function draw() {
	background('lightblue');

	var title; //the title
	if (currentSlide == 0) {
		title = "My final Project Pitch";
		message = "My final project will be about a dress your character game";
	} else if (currentSlide == 1) {
		title = "User interaction";
		message = "The user will be able to change the clothes of the character using arrow keys";
	} else if (currentSlide == 2) {
		title = "Graphics"
		message = "The graphics that will be implemented are based on p5 shapes, colors and probably outside images";
	}

	//display message
	textSize(20);
	fill(0);
	noStroke();
	textAlign(LEFT, TOP);
	text(message, 30, 200);

	//display title 
	textSize(50);
	fill('gold');
	noStroke();
	textAlign(LEFT, TOP);
	text(title, 20, 20);

	//Slide button
	//button back design
	stroke(255)
	strokeWeight(2);
	fill(0);

	if (currentSlide < numberOfSlides - 1) {
		rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH); //next button
	}

	if (currentSlide > 0) {
		rect(prevButtonX, nextButtonY, nextButtonW, nextButtonH); //previous button
	}

	//text design
	fill(255);
	textSize(25);
	noStroke();
	textAlign(CENTER, CENTER);

	if (currentSlide < numberOfSlides - 1) {
		text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH); //next
	}

	if (currentSlide > 0) {
		text("Previous", prevButtonX, nextButtonY, prevButtonW, nextButtonH); //previous
	}
	
}

function mousePressed() {
	if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
		mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
		if (currentSlide < numberOfSlides - 1) {
			currentSlide++;
		}
	}

	if (mouseX > prevButtonX && mouseX < prevButtonX + nextButtonW &&
		mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
		if (currentSlide > 0) {
			currentSlide--;
		}
	}
}