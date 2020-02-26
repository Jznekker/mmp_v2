var r = 0;
var b = 255;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	//background
	//r = map(mouseX, 0, 600, 0, 255);
	//b = map(mouseY, 0, 600, 255, 0);

	background('white');

	//Face
	r = map(mouseX, 0, 600, 0, 255);
	b = map(mouseY, 0, 600, 255, 0);

	fill(r, 0, b);
	ellipse(320, 180, 300);
	
	//Right eye
	fill('black');
	ellipse(400, 160, 50);
	//right iris
	fill('white');
	ellipse(400, 160, 40);

	//Left eye
	fill('black');
	ellipse(240, 160, 50);
	//left iris
	fill('white');
	ellipse(240, 160, 40);
	//mouth
	fill('black');
	ellipse(320, 230, 50, 80);

	//tongue
	fill('red');
	ellipse(320, 250, 40, 40);
}