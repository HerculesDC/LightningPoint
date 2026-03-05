class Component{ //for inheritance
	constructor(_name){
		this.prnt = null;
		this.name = _name;
	}
	init(_prnt){
		this.prnt = _prnt;
	}
	update(dt){}
	render(){}
}
