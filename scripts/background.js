function Background(){	

	var sprite = new createjs.Container();
	console.log(stage.canvas.height);
	var sun = Sun(
		{
			x: (stage.canvas.width - SUN_SIZE) * 0.5,
			y: stage.canvas.height,
			r: stage.canvas.width * 0.5,
			speed: SUN_SPEED,
			color: '#ffeeaa'
		}
	);
	var sky = Sky({sun:sun});
	
	// order of addition matters!!
	sprite.addChild(sky.sprite);
	sprite.addChild(sun.sprite);
	sprite.addChild(hills);

	var draw = function(){
		sun.draw();
		sky.draw();				
	};
	
	return{
		'sprite':sprite,
		'draw':draw
	};
	
}