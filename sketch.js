var bubbles = [];

function setup(){
	createCanvas(600, 400);

}

function draw(){
	background(0);
	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display();
	}

	if(bubbles.length > 50){
		bubbles.splice(0, 1);
	}
}

function mousePressed(){
	bubbles.splice(0, 1);
}

function mouseDragged(){
	bubbles.push(new Bubble(mouseX, mouseY));
}

function Bubble(x, y){
	this.x = x;
	this.y = y;
	this.move =  function(){
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	};
	this.display = function(){
		stroke(255);
		noFill();
		ellipse(this.x, this.y, 24, 24);
	}
}


