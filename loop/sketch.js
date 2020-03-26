// loop repeats something
for (let i = 100; i >= 1; i--) {
	console.log('i', i); 
}


/*
	Loop example
	3.26.2020
*/

function setup() {
	createCanvas(640, 360);
	noStroke()
}

function draw() {
	background('white');

	for (let x = 0; x <= width; x +=80) {

		fill('black');
		noStroke();
		rect(0, height/2, width, width/2)
	}


	for (let x = 0; x <= width; x +=100) {

		fill(255, 202, 2);
		ellipse(x, 80, 100);

		fill(233, 63, 90);
		ellipse(x, 180, 80);

		fill(62, 188, 163);
		ellipse(x, 280, 50);

		fill(240, 240, 240);
		ellipse(x, 340, 20);
	}

}