function Cloud(prefs){	
	var sprite = window['cloud_' + prefs.type].clone();
	sprite.name = 'cloud-'+guid();
	sprite.x = prefs.x;
	sprite.y = prefs.y;
	sprite.scaleX = prefs.sx;
	sprite.scaleY = prefs.sy;
	sprite.alpha = prefs.alpha;
	
	var draw = function(){
		
		//will move by speed.
		sprite.x += prefs.vx * WIND_SPEED;
		sprite.y += prefs.vy * WIND_SPEED;
		//will cause the object to wrap back
		if ( sprite.x > (stage.canvas.width + sprite.image.width) || sprite.y > (stage.canvas.height + sprite.image.height) ) { 
			sprite.x = -sprite.image.width; 
			sprite.y = prefs.y; 
		}
		
	};
	
	var handleClick = function(event)
	{
		console.log(sprite+' Hit!!');
		//stage.removeChild(sprite);
		stage.update();		
	};	
	sprite.addEventListener("click", handleClick);

	return{
		'sprite':sprite,
		'draw':draw
	}; 

}