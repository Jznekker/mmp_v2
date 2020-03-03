/*
	Meme project
	2.25.2020
*/

//global scope
var kidImage; 

function preload() {
	kidImage = loadImage("kid.png");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}	

function draw() {
	background('white');

	// draw
	image(kidImage, 0, 0, 550, 510);

	var world = 'When you got an A+ on your test';
	var end = map(frameCount, 0, 200, 0, world.length);

	textAlign(LEFT);
	textSize(75);
	fill('yellow');
	stroke('red');
	strokeWeight(10)
	textStyle(ITALIC);
	textFont('Segoe UI');
	text(world.substring(0, end), 0, 250);

	
	var face = ':)';
	var lmao = map(frameCount, 0, 200, 0, face.length);

	textAlign(CENTER);
	textSize(50);
	strokeWeight(10);
	text(face.substring(0, lmao) , 180, 400);
}