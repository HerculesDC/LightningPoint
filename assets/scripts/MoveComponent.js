class MoveComponent extends Component{
	constructor(){
		super("MoveComponent");
		this.x = 100;
		this.y = 100;
		this.vels = [0.01, 0.01];
	}
	init(){}
	update(dt){
		this.x += InputHandler.arrow_input.horizontal * this.vels[0] *dt;
		this.y += InputHandler.arrow_input.vertical * this.vels[0] * dt;
	}
	render(){}
}