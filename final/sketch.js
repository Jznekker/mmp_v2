/*
	Final Project
	05.07.2020
*/

var torsoNumber = 0; //torso default number
var skinColorNumber = 0 //skin color default number
var pantsNumber = 0 // pants default number

//torso, pants, skincolor default
var torso = ('white');
var pants = ("white");
var skinColor = ("#fdddca");

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('lightblue');

	//head
	fill(skinColor);
	ellipse(330, 70, 80, 60);

	//defaultarms
	rect(250, 140, 35, 80); 
	rect(375, 140, 35, 80);

	//default torso
	noStroke();
	fill(torso);
	rect(250, 100, 160, 40);
	rect(292, 100, 75, 110);

	//default pants
	fill(pants);
	rect(292, 210, 40, 100);
	rect(327, 210, 40, 100);

	//torso colors
	if (torsoNumber == 0) {
		torso = ("#fff");
	} else if (torsoNumber == 2) {
		torso = ('darkgrey');
	} else if (torsoNumber == 3) {
		torso = ('green');
	} else if (torsoNumber == 4) {
		torso = ('purple');
	} else if (torsoNumber == 5) {
		torso = ('red');
	} else if (torsoNumber == 6) {
		torso = ('orange');
	} 
	//pants colors
	if (pantsNumber == 0) {
		pants = ("#fff");
	} else if (pantsNumber == 2) {
		pants = ("green");
	} else if (pantsNumber == 3) {
		pants = ('yellow');
	} else if (pantsNumber == 4) {
		pants = ('white');
	} else if (pantsNumber == 5) {
		pants = ('blue'); 
	} else if (pantsNumber == 6) {
		pants = ('grey'); 
	} 

	//Skin color
	if (skinColorNumber == 0) {
		skinColor = ("#fdddca");
	} else if (skinColorNumber == 1) {
		skinColor = ("#967264");
	} else if (skinColorNumber == 2) {
		skinColor = ("#c68642");
	} else if (skinColorNumber == 3) {
		skinColor = ("#967264");
	} else if (skinColorNumber == 4) {
		skinColor = ("#f1c27d");
	} else if (skinColorNumber == 5) {
		skinColor = ("#ffdbac");
	}
}

function keyPressed() {
	if (keyCode == 38) {
		torsoNumber++;
	} else if (keyCode == 40) {
		torsoNumber--;
	}

	if (keyCode == 39) {
		pantsNumber++;
	} else if (keyCode == 37) {
		pantsNumber--;
	}

	if (keyCode == 77) {
		skinColorNumber++;
	} else if (keyCode == 78) {
		skinColorNumber--;
	}
}