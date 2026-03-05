function calculateCanvasAttrs(){
	let cSide = Math.min(Math.floor(windowHeight*.9125), Math.floor(windowWidth*.9125));
	return {
		CANVAS_SIDE: cSide,
		TPADDING: 75,
		LPADDING: Math.floor((windowWidth-cSide)*0.5)
	}
}

var canvas_attr = calculateCanvasAttrs();

function setup() {
	let c  = createCanvas(canvas_attr.CANVAS_SIDE, canvas_attr.CANVAS_SIDE);
	c.position(canvas_attr.LPADDING, 75, "float:center");
	colorMode(HSB, TAU, 1.0, 1.0, 1.0);
	angleMode(RADIANS);
	rectMode(CORNER);
	ellipseMode(RADIUS);
	imageMode(CENTER);
	textFont("Courier New");
	textAlign(CENTER, CENTER);
}

frameRate(120);

var scene = new Scene();
scene.init(null);
function draw(){
	background(0, 0, 0.1);
	scene.update(deltaTime);
	scene.render();
}