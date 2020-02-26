// global scope
var x = 200; // Origin for face
var y = 180; 

// size variables
var s = 300;





function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('white');
	//Face
	fill('lightblue');
	ellipse(x, y, s);
	x++;
	s++;
	
	//Right eye
	fill('white');
	ellipse(x + 100, 160, 50);
	//right iris
	fill('black');
	ellipse(x + 110, 170, 20);

	//Left eye
	fill('white');
	ellipse(x, 160, 50);
	//left iris
	fill('black');
	ellipse(x + 10, 170, 20)
	//mouth
	fill('black');
	ellipse(x + 50, 230, s/2, 80);

	//tongue
	fill('red');
	ellipse(x + 50, 250, s/10, 40);

	//Icecream
	fill(247, 219, 236);
	ellipse(x + 200 ,250, 30, 30);
	fill(248, 200, 226);
	ellipse(x + 230, 250, 30, 30);
	fill(255, 253, 208);
	ellipse(x + 215, 225, 30, 30);

	//cup
	fill('violet');
	rect(x + 175, 260, 80, 40, 20);
}