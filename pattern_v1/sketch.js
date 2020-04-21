/*
	DOM example
	04.18.2020
*/	

var angleSlider;
var nameInput;

function setup() {
	createCanvas(640, 360);
	noStroke();

	angleSlider = createSlider(0, TWO_PI, 0, PI * 0.01);
	angleSlider.input(pattern);

	var patternButton = createButton("New Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.mousePressed(saveImage);

	nameInput = createInput("Leave a music name here");

	pattern();

}

function saveImage() {
	save("pattern.png");
}


function pattern() {
	background(' yellow');

	for (let x = 0; x <= width + 100; x += 100) {

		push();
		translate(x, height/2);
		rotate(angleSlider.value * PI);
		fill('purple');
		ellipse(0, 0, random(100, 200), random(100, 200));
		pop();
	}

	textAlign(CENTER, CENTER);
	textSize(50);
	fill('purple');
	stroke('plump');
	strokeWeight(5);
	text(nameInput.value(), width/2, height/2);
}