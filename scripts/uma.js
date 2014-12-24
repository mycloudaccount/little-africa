function Uma(prefs){	

	var sprite = new createjs.Container();
	sprite.name = 'uma-'+guid();
	sprite.x = prefs.x;
	sprite.y = prefs.y;

	// create the sprite sheet builder:
	var data = {
	    images: ["images/characters/uma/idle/uma.png"],
	    frames: {width:120, height:120},
	    animations: {
	        jump:[0,23]
	    }
	};
	var spriteSheet = new createjs.SpriteSheet(data);
	var animation = new createjs.Sprite(spriteSheet, "run");

	sprite.addChild(animation);	
	
	var draw = function(){
		
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