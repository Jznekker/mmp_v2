/*
	DOM example
	04.18.2020
*/	

/*
	Pattern
	04.21.2020
*/

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(51);

	var w = 100; // width of one cell
	var h = w;  // height of one cell

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y+= h) {
			ellipse(x + 50, y + 50, w);

			fill('plum');
			line(x + 100, y, 350, 250);
			line(x, y, 350, 250);

			line(x + 100, y, 350, 230);
			line(x, y, 350, 230);
		}
	}

}	