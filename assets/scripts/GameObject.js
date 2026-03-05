class GameObject{ //for composition
	constructor(_name){
		this.name = _name;
		this.components = {};
	}
	init(go_data){
		//components, basically
	}
	update(dt){
		for(var comp in this.components){comp.update(dt);}
	}
	render(){for(var comp in this.components){comp.render();}}
	addComponent(component){
		if(component.name in componentList){
			this.components[component.name] = component;
			this.components[component.name].init(this);
		}
	}
	getComponent(component){
		if(component.name in this.components){return this.components[component.name];}
		return null;
	}
}