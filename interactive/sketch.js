var r = 0;
var b = 255;
var eye = 60;


function setup() {
	createCanvas(600, 400);
}

function draw() {
	//background
	//r = map(mouseX, 0, 600, 0, 255);
	//b = map(mouseY, 0, 600, 255, 0);
    
    var x = pmouseX;
    var y = pmouseY;

	background('black');

	//Face
	r = map(mouseX, 0, 600, 0, 255);
	b = map(mouseY, 0, 600, 255, 0);

	fill('yellow');
	ellipse(x, y, 300);
	
	//Right eye
	fill('white');
	ellipse(x + 80, y, eye);
	//right iris
	fill(r, 0, b);
	ellipse(400, 160, 40);

	//Left eye
	fill('white');
	ellipse(x - 80, y, eye);
	//left iris
	fill(r, 0, b);
	ellipse(240, 160, 40);
	//mouth
	fill('black');
	ellipse(x + 5, y + 60, 50, 80);

	//tongue
	fill('white');
	ellipse(320, 250, 40, 40);
    
}