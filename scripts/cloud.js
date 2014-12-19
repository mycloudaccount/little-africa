function Cloud(prefs){	
	var sprite = window['cloud_' + prefs.type].clone();
	sprite.name = 'cloud-'+guid();
	sprite.x = prefs.x;
	sprite.y = prefs.y;
	sprite.scaleX = prefs.sx;
	sprite.scaleY = prefs.sy;
	sprite.alpha = prefs.alpha;
	
	var rainDrop = null;
	
	var draw = function(){
		
		//will move by speed.
		sprite.x += prefs.vx * WIND_SPEED;
		sprite.y += prefs.vy * WIND_SPEED;
		//will cause the object to wrap back
		if ( sprite.x > (stage.canvas.width + sprite.image.width) || sprite.y > (stage.canvas.height + sprite.image.height) ) { 
			sprite.x = -sprite.image.width; 
			sprite.y = prefs.y; 
		}
		
		// randomly create and drop rain
		if(rainDrop === null && Math.random() > 0.18){
			rainDrop = RainDrop(
				{
					x:sprite.x + sprite.image.width * 0.5,
					y:sprite.y + sprite.image.height,
					vx:0,
					vy:RAIN_SPEED,
					sx:0.7,
					sy:0.7
					
				});
			stage.addChild(rainDrop.sprite);
			//console.log(rainDrop.sprite.x);
		}
		
		if(rainDrop !== null && rainDrop.settings.alive)
			rainDrop.draw();
		else
			rainDrop = null;
			
	};
	
	var handleClick = function(event)
	{
		console.log(sprite+' Hit!!');
		stage.update();		
	};	
	sprite.addEventListener("click", handleClick);

	return{
		'sprite':sprite,
		'draw':draw
	}; 

}