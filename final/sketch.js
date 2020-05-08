/*
	Final Project
	05.07.2020
*/

var bgS = 0; //background default number

//backgrounds & sounds effects
var bg;
var bg2;
var bg3;
var bg4;
var bg5;

var streetSound; 
var car;
var rain;
var homerun;
var redCarpet;

var torsoNumber = 0; //torso default number
var skinColorNumber = 0 //skin color default number
var pantsNumber = 0 // pants default number
var shoesNumber = 0 // face default number

//torso, pants, skincolor default
var torso = ('white');
var pants = ("white");
var skinColor = ("#fdddca");
var shoes = ("#fff")

function preload() {

	//sounds
	streetSound = loadSound("sounds/citystreet.mp3");
	birds = loadSound("sounds/birds.wav");
	rain = loadSound("sounds/rain.mp3");
	homerun = loadSound("sounds/homerun.mp3");
	applause = loadSound("sounds/applause.mp3");

	//Images
	bg = loadImage("Images/bg1.jpg");
	bg2 = loadImage("Images/bg2.jpg");
	bg3 = loadImage("Images/rainy.jpg");
	bg4 = loadImage("Images/stadium.jpg");
	bg5 = loadImage("Images/redcarpet.jpg")
}

function setup() {
	createCanvas(640, 360);

	var saveSS = createButton("Take Screenshot");
	saveSS.mousePressed(saveImage);
}

function saveImage() {
	save("trip.png");
}

function draw() {

	if (streetSound.isPlaying()) {
		background(bg);
	} 

	if (birds.isPlaying()) {
		background(bg2);
		rain.stop();
		streetSound.stop();
		homerun.stop();
	}

	if (rain.isPlaying()) {
		background(bg3);
		birds.stop();
		streetSound.stop();
		homerun.stop();
	}

	if (homerun.isPlaying()) {
		background(bg4);
		birds.stop();
		rain.stop();
		streetSound.stop();
	}

	if (applause.isPlaying()) {
		background(bg5);
		birds.stop();
		rain.stop();
		streetSound.stop();
		homerun.stop();
	}

	//head
	noStroke();
	fill(skinColor);
	ellipse(335, 70, 80, 60);

	//defaultarms
	noStroke();
	rect(260, 140, 35, 80); 
	rect(375, 140, 35, 80);

	//default torso
	strokeWeight(4);
	stroke(2);
	fill(torso);
	rect(255, 100, 160, 40);
	rect(292, 100, 85, 110);

	//default pants
	fill(pants);
	rect(295, 210, 40, 100);
	rect(335, 210, 40, 100);

	//default shoes
	fill(shoes);
	rect(295, 310, 40, 20);
	rect(335, 310, 40, 20);

	//torso colors
	if (torsoNumber == 0) {
		torso = ("#fff");
	} else if (torsoNumber == 2) {
		torso = ("#090979");
	} else if (torsoNumber == 3) {
		torso = ('#fdbb2d');
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

	//shoes color
	if (shoesNumber == 0) {
		shoes = ("#fff");
	} else if (shoesNumber == 2) {
		shoes = ("#ddd");
	} else if (shoesNumber == 3) {
		shoes = ("#000");
	} else if (shoesNumber == 4) {
		shoes = ('red');
	} else if (shoesNumber == 5) {
		shoes = ('yellow');
	}
}

function keyPressed() {
	if (keyCode == 38) { //Arrow up
		torsoNumber++;
	} else if (keyCode == 40) { //Arrow down
		torsoNumber--;
	}

	if (keyCode == 39) { //Arrow right
		pantsNumber++;
	} else if (keyCode == 37) { //Arrow left
		pantsNumber--;
	}

	if (keyCode == 77) { //M
		skinColorNumber++;
	} else if (keyCode == 78) { //N
		skinColorNumber--;
	}

	if (keyCode == 75) { //K
		shoesNumber++;
	} else if (keyCode == 74) { //J
		shoesNumber--;
	}

	if (keyCode == 49) { //1
		streetSound.play();
	} else if (keyCode == 50) { //2
		birds.play();
	} else if (keyCode == 51) { //3
		rain.play();
	} else if (keyCode == 52) { //4
		homerun.play();
	} else if (keyCode == 53) { //5
		applause.play();
	}
}