class InputHandler{
	static arrow_input = { //Input Data
			horizontal: 0, //left-right arrows
			vertical: 0, //up-down arrows
		}
	static wasd_input = {
			ad: 0, //A-D left-right
			ws: 0 //W-S up-down
	}
	constructor(){}
	static process_input(){
		
		//Horizontal Input (Arrows)
		if (keyIsDown(LEFT_ARROW)){ InputDetector.arrow_input.horizontal = -1; }
		if (keyIsDown(RIGHT_ARROW)){ InputDetector.arrow_input.horizontal = 1; }
		if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)|| 
			!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW)){ InputDetector.arrow_input.horizontal = 0; }
		
		//Vertical input (Arrows)
		if (keyIsDown(UP_ARROW)){ InputDetector.arrow_input.vertical = -1; }
		if (keyIsDown(DOWN_ARROW)){ InputDetector.arrow_input.vertical = 1; }
		if (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW)|| 
			!keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){ InputDetector.arrow_input.vertical = 0; }
		
		//WASD
		//65: A, 68: D
		if (keyIsDown(65)){ InputDetector.wasd_input.ad = -1; }
		if (keyIsDown(68)){ InputDetector.wasd_input.ad = 1; }
		if (keyIsDown(65) && keyIsDown(68)|| 
			!keyIsDown(65) && !keyIsDown(68)){ InputDetector.wasd_input.ad = 0; }
		
		//83: S (down), 87: W(up)
		if (keyIsDown(87)){ InputDetector.wasd_input.ws = -1; }
		if (keyIsDown(83)){ InputDetector.wasd_input.ws = 1; }
		if (keyIsDown(87) && keyIsDown(83)|| 
			!keyIsDown(83) && !keyIsDown(83)){ InputDetector.wasd_input.ws = 0; }
	}
}

function keyReleased(e){
	switch(keyCode){
		case 13: //ENTER
			break;
		case 32: //SPACE
			break;
		default: break;
	}
}

// function mouseClicked(){
	
// }