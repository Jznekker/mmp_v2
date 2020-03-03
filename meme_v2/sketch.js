/*
	Meme project v2
	03.03.2020
*/

//global scope
var kidImage;
var mike; 

function preload() {
	kidImage = loadImage("1.jpg");
	mike = loadImage("2.jpg")
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}	

function draw() {
	background('white');

	// draw the image
	if (mouseIsPressed) {
		image(mike, 0, 0, width, height);
	} else {
		image(kidImage, 0, 0, 550, 510);
	}

	var world = 'Feel free to touch me :D';
	var end = map(frameCount, 0, 150, 0, world.length);
	if (mouseIsPressed) {
		world = 'Chiiiill';
	} 

	textAlign(LEFT);
	textSize(30);
	fill('yellow');
	stroke('red');
	strokeWeight(10)
	textStyle(ITALIC);
	textFont('Segoe UI');
	text(world.substring(0, end), 0, 250);

}