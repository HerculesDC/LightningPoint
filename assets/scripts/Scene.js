class Scene{ //for composition
	constructor(){
		this.gameObjects = {}
	}
	init(scene_data){
		this.gameObjects.light = new GameObject("Light");
		this.gameObjects.light.init(null);
		this.gameObjects.light.addComponent("MoveComponent");
		this.gameObjects.light.addComponent("RenderComponent");
 	}
	update(dt){
		this.gameObjects.light.update(dt);
	}
	render(){
		this.gameObjects.light.render();
	}
}