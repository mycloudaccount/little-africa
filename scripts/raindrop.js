function RainDrop(prefs){	
	var sprite = window['raindrop'].clone();
	sprite.name = 'raindrop-'+guid();
	sprite.x = prefs.x;
	sprite.y = prefs.y;
	sprite.scaleX = prefs.sx;
	sprite.scaleY = prefs.sy;
	
	var settings = {
		
		'alive':true
		
	};

	var draw = function(){
		
		//will move by speed.
		sprite.x += prefs.vx;
		sprite.y += prefs.vy;
		//will cause the object to be detroyed
		if ( sprite.x > (stage.canvas.width - sprite.image.width * prefs.sx) || sprite.y > (stage.canvas.height - sprite.image.height * prefs.sy) ) { 
			precipitation.removeChild(sprite);
			sprite = null;
			settings.alive = false;
		}
		
	};
	
	var handleClick = function(event)
	{
		console.log(sprite+' Hit!!');
		stage.update();		
	};	
	sprite.addEventListener("click", handleClick);

	return{
		'sprite':sprite,
		'draw':draw,
		'settings':settings
	}; 

}