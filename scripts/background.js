function Background(){	

	var sprite = new createjs.Container();
	var stars = [];

	// stars
	var it = 0;
	var starsContainer = new createjs.Container();
	for(it=0;it<STAR_CNT;++it) {
		var sizeFactor = Math.random();
		stars[it] = Star(
			{
				alpha: 1.0,
				x: stage.canvas.width * Math.random(),
				y: 10 + stage.canvas.height * 0.5 * Math.random(),
				r: 1.0 + 1.5 * sizeFactor,
				pulseSpeed: 0.01 + 0.01 * sizeFactor,
				color: '#ffffff'
			}
		);
		starsContainer.addChild(stars[it].sprite);
	}

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
	
	// order of addition matters everything should go after the sky!!
	sprite.addChild(sky.sprite);
	
	sprite.addChild(starsContainer);
	sprite.addChild(sun.sprite);
	sprite.addChild(hills);

	var draw = function(){
		sun.draw();
		
		if(sky.condition.timeOfDay === NIGHT){
			if(starsContainer.alpha === 0.0){
				createjs.Tween.get(starsContainer).to({alpha:1.0},10000, createjs.Ease.linear);
			}
			else if(starsContainer.alpha === 1.0){
				for(var it in stars) {
					stars[it].draw();
				}
			}
		}
		else if(starsContainer.alpha === 1.0){
			createjs.Tween.get(starsContainer).to({alpha:0.0},4000, createjs.Ease.quadIn);
		}
		
		sky.draw();				
	};
	
	return{
		'sprite':sprite,
		'draw':draw
	};
	
}