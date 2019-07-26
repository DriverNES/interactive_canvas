var socket;

function setup() {
  createCanvas(1000, 800);
  // myGamePiece = new component(30, 30, "red", 10, 120);
	background(51);
	socket = io.connect('http://154.119.225.167:3000');
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	noStroke();
	fill(255,0,100);
	ellipse(data.x, data.y, 15, 15);
}

function draw() {
}

function mouseDragged(){
	console.log(mouseX + ', ' + mouseY);
	noStroke();
	fill(255,255,255);
	ellipse(mouseX, mouseY, 15, 15);

	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);
}