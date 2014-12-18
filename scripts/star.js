function Star(prefs){	
	var startAngle = 0;
	var position = {x:prefs.x,y:prefs.y,radius:prefs.r,angle:startAngle};
	var sprite = new createjs.Shape();
	sprite.graphics.beginFill(prefs.color).drawCircle(0, 0, position.radius);
	sprite.name = 'star-' + guid();
	sprite.x = position.x;
	sprite.y = position.y;
	sprite.alpha = prefs.alpha;
	
	var draw = function(){
		
		// ex. 0.9 means sparkle 90% of the time
		if(Math.random() < prefs.pulseSpeed) {
			sparkle();
		}

	};
	
	var sparkle = function() {
		
		if (sprite.alpha === 1.0)
			createjs.Tween.get(sprite).to({alpha:0.3},1000, createjs.Ease.linear);
		else if (sprite.alpha === 0.3)
			createjs.Tween.get(sprite).to({alpha:1.0},1000, createjs.Ease.linear);
			
	}
	
	var handleClick = function(event)
	{
		console.log(sprite+' Hit!!');
		stage.update();		
	};	
	sprite.addEventListener("click", handleClick);

	return{
		'position':position,
		'sprite':sprite,
		'draw':draw
	}; 

}