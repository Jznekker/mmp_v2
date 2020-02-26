

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('white');
	//Face
	fill('lightblue');
	ellipse(320, 180, 300);
	
	//Right eye
	fill('white');
	ellipse(400, 160, 50);
	//right iris
	fill('black');
	ellipse(410, 170, 20);

	//Left eye
	fill('white');
	ellipse(240, 160, 50);
	//left iris
	fill('black');
	ellipse(250, 170, 20)
	//mouth
	fill('black');
	ellipse(320, 230, 50, 80);

	//tongue
	fill('red');
	ellipse(320, 250, 40, 40);

	//Icecream
	fill(247, 219, 236);
	ellipse(550, 250, 30, 30);
	fill(248, 200, 226);
	ellipse(520, 250, 30, 30);
	fill(255, 253, 208);
	ellipse(535, 225, 30, 30);

	//cup
	fill('violet');
	rect(495, 260, 80, 40, 20);
}