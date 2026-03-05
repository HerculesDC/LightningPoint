class RenderComponent extends Component{
	constructor(){
		super("RenderComponent");
		this.c = createCanvas(50, 50);
		this.c.background(0, 0, 0, 0);
		this.c.fill(255, 255, 100);
		this.c.noStroke();
		this.c.ellipse(25, 25, 50, 50);
	}
	init(_prnt){
		this.prnt = _prnt;
	}
	update(dt){}
	render(){
		let mv = this.prnt.getComponent("MoveComponent");
		image(this.c, mv.x, mv.y);
		
		stroke(0, 0, 1);
		strokeWeight(5);
		point(300, 300);
	}
}