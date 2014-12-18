function RainDrop(prefs){	
	var sprite = window['rainDrop'].clone();
	sprite.name = 'rainDrop-'+guid();
	sprite.x = prefs.x;
	sprite.y = prefs.y;
	sprite.scaleX = prefs.sx;
	sprite.scaleY = prefs.sy;

	var draw = function(){
		
		//will move by speed.
		sprite.x += prefs.vx;
		sprite.y += prefs.vy;
		//will cause the object to wrap back
		if ( sprite.x > (stage.canvas.width + sprite.image.width) || sprite.y > (stage.canvas.height + sprite.image.height) ) { 
			stage.removeChild(sprite);
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
		'draw':draw
	}; 

}